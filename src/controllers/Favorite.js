const favoriteService = require('../services/Favorite');

exports.getAllFavorites = async (req, res, next) => {
  try {
    const result = await favoriteService.getAllFavorites(req.query);
    res.status(200).json({
      status: 200,
      data: result,
      message: 'Favorites retrieved successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.addFavorite = async (req, res, next) => {
  try {
    const result = await favoriteService.addFavorite(req.body);
    res.status(201).json({
      status: 201,
      data: result,
      message: 'Added to favorites successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteFavorite = async (req, res, next) => {
  try {
    await favoriteService.deleteFavorite(req.params.id);
    res.status(200).json({
      status: 200,
      message: 'Favorite removed successfully.',
    });
  } catch (error) {
    next(error);
  }
};