const Album = require('../models/Album');
const { v4: uuidv4 } = require('uuid');

exports.getAllAlbums = async (query) => {
  const { limit = 5, offset = 0 } = query;
  return await Album.find().limit(Number(limit)).skip(Number(offset));
};

exports.addAlbum = async (data) => {
  const newAlbum = new Album({
    album_id: uuidv4(),
    name: data.name,
    year: data.year,
    hidden: data.hidden || false,
    artist_id: data.artist_id,
  });
  return await newAlbum.save();
};

exports.getAlbumById = async (id) => {
  const album = await Album.findOne({ album_id: id });
  if (!album) {
    throw new Error('Album not found');
  }
  return album;
};

exports.updateAlbum = async (id, data) => {
  const album = await Album.findOneAndUpdate({ album_id: id }, data, {
    new: true,
    runValidators: true,
  });
  if (!album) {
    throw new Error('Album not found');
  }
  return album;
};

exports.deleteAlbum = async (id) => {
  const album = await Album.findOneAndDelete({ album_id: id });
  if (!album) {
    throw new Error('Album not found');
  }
};