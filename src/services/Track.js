const Track = require('../models/Track');
const { v4: uuidv4 } = require('uuid');

exports.getAllTracks = async (query) => {
  const { limit = 5, offset = 0 } = query;
  return await Track.find().limit(Number(limit)).skip(Number(offset));
};

exports.addTrack = async (data) => {
  const newTrack = new Track({
    track_id: uuidv4(),
    name: data.name,
    duration: data.duration,
    hidden: data.hidden || false,
    album_id: data.album_id,
    artist_id: data.artist_id,
  });
  return await newTrack.save();
};

exports.getTrackById = async (id) => {
  const track = await Track.findOne({ track_id: id });
  if (!track) {
    throw new Error('Track not found');
  }
  return track;
};

exports.updateTrack = async (id, data) => {
  const track = await Track.findOneAndUpdate({ track_id: id }, data, {
    new: true,
    runValidators: true,
  });
  if (!track) {
    throw new Error('Track not found');
  }
  return track;
};

exports.deleteTrack = async (id) => {
  const track = await Track.findOneAndDelete({ track_id: id });
  if (!track) {
    throw new Error('Track not found');
  }
};