const Artist = require('../models/Artist');
const { v4: uuidv4 } = require('uuid');

exports.getAllArtists = async (query) => {
  const { limit = 5, offset = 0 } = query;
  return await Artist.find().limit(Number(limit)).skip(Number(offset));
};

exports.addArtist = async (data) => {
  const newArtist = new Artist({
    artist_id: uuidv4(),
    name: data.name,
    grammy: data.grammy || false,
    hidden: data.hidden || false,
  });
  return await newArtist.save();
};

exports.getArtistById = async (id) => {
  const artist = await Artist.findOne({ artist_id: id });
  if (!artist) {
    throw new Error('Artist not found');
  }
  return artist;
};

exports.updateArtist = async (id, data) => {
  const artist = await Artist.findOneAndUpdate({ artist_id: id }, data, {
    new: true,
    runValidators: true,
  });
  if (!artist) {
    throw new Error('Artist not found');
  }
  return artist;
};

exports.deleteArtist = async (id) => {
  const artist = await Artist.findOneAndDelete({ artist_id: id });
  if (!artist) {
    throw new Error('Artist not found');
  }
};