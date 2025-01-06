const trackService = require('../services/Track');

exports.getAllTracks = async (req, res, next) => {
  try {
    const result = await trackService.getAllTracks(req.query);
    res.status(200).json({
      status: 200,
      data: result,
      message: 'Tracks retrieved successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.addTrack = async (req, res, next) => {
  try {
    const result = await trackService.addTrack(req.body);
    res.status(201).json({
      status: 201,
      data: result,
      message: 'Track added successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.getTrackById = async (req, res, next) => {
  try {
    const result = await trackService.getTrackById(req.params.id);
    res.status(200).json({
      status: 200,
      data: result,
      message: 'Track retrieved successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.updateTrack = async (req, res, next) => {
  try {
    const result = await trackService.updateTrack(req.params.id, req.body);
    res.status(200).json({
      status: 200,
      data: result,
      message: 'Track updated successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteTrack = async (req, res, next) => {
  try {
    await trackService.deleteTrack(req.params.id);
    res.status(200).json({
      status: 200,
      message: 'Track deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};