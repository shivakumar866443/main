const Favorite = require('../models/Favorite');
const addFavorite = async (userId, itemId) => {
  try {
    const favorite = new Favorite({
      user: userId,
      item: itemId,
    });
    await favorite.save();
    return { success: true, message: 'Item added to favorites' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Get all favorites for a user
const getFavorites = async (userId) => {
  try {
    const favorites = await Favorite.find({ user: userId }).populate('item');
    return { success: true, data: favorites };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Remove a favorite
const removeFavorite = async (userId, itemId) => {
  try {
    await Favorite.deleteOne({ user: userId, item: itemId });
    return { success: true, message: 'Item removed from favorites' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

module.exports = {
  addFavorite,
  getFavorites,
  removeFavorite,
};
