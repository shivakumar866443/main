const artistService = require('../services/Artist');

exports.getAllArtists = async (req, res, next) => {
  try {
    const result = await artistService.getAllArtists(req.query);
    res.status(200).json({
      status: 200,
      data: result,
      message: 'Artists retrieved successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.addArtist = async (req, res, next) => {
  try {
    const result = await artistService.addArtist(req.body);
    res.status(201).json({
      status: 201,
      data: result,
      message: 'Artist added successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.getArtistById = async (req, res, next) => {
  try {
    const result = await artistService.getArtistById(req.params.id);
    res.status(200).json({
      status: 200,
      data: result,
      message: 'Artist retrieved successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.updateArtist = async (req, res, next) => {
  try {
    const result = await artistService.updateArtist(req.params.id, req.body);
    res.status(200).json({
      status: 200,
      data: result,
      message: 'Artist updated successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteArtist = async (req, res, next) => {
  try {
    await artistService.deleteArtist(req.params.id);
    res.status(200).json({
      status: 200,
      message: 'Artist deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};