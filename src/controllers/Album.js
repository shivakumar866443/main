const albumService = require('../services/Album');

exports.getAllAlbums = async (req, res, next) => {
  try {
    const result = await albumService.getAllAlbums(req.query);
    res.status(200).json({
      status: 200,
      data: result,
      message: 'Albums retrieved successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.addAlbum = async (req, res, next) => {
  try {
    const result = await albumService.addAlbum(req.body);
    res.status(201).json({
      status: 201,
      data: result,
      message: 'Album added successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.getAlbumById = async (req, res, next) => {
  try {
    const result = await albumService.getAlbumById(req.params.id);
    res.status(200).json({
      status: 200,
      data: result,
      message: 'Album retrieved successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.updateAlbum = async (req, res, next) => {
  try {
    const result = await albumService.updateAlbum(req.params.id, req.body);
    res.status(200).json({
      status: 200,
      data: result,
      message: 'Album updated successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteAlbum = async (req, res, next) => {
  try {
    await albumService.deleteAlbum(req.params.id);
    res.status(200).json({
      status: 200,
      message: 'Album deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};