const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const config = require('../../config/config');

exports.signup = async ({ email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    user_id: uuidv4(),
    email,
    password: hashedPassword,
    role: 'Viewer',
  });

  await user.save();
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new Error('Invalid credentials');
  }

  return jwt.sign(
    { id: user.user_id, role: user.role },
    config.jwt.secret,
    { expiresIn: config.jwt.expiresIn }
  );
};

exports.getAllUsers = async (query) => {
  const { limit = 5, offset = 0 } = query;
  return await User.find().limit(Number(limit)).skip(Number(offset));
};

exports.updatePassword = async ({ email, oldPassword, newPassword }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  const validPassword = await bcrypt.compare(oldPassword, user.password);
  if (!validPassword) {
    throw new Error('Invalid credentials');
  }

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();
};

exports.deleteUser = async (id) => {
  const user = await User.findOneAndDelete({ user_id: id });
  if (!user) {
    throw new Error('User not found');
  }
};