const userService = require('../services/userService');

exports.signup = async (req, res, next) => {
  try {
    const result = await userService.signup(req.body);
    res.status(201).json({
      status: 201,
      data: null,
      message: 'User created successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body);
    res.status(200).json({
      status: 200,
      data: { token: result },
      message: 'Login successful.',
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const result = await userService.getAllUsers(req.query);
    res.status(200).json({
      status: 200,
      data: result,
      message: 'Users retrieved successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.updatePassword = async (req, res, next) => {
  try {
    await userService.updatePassword(req.body);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(200).json({
      status: 200,
      message: 'User deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};
