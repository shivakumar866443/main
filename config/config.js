module.exports = {
    app: {
      port: process.env.PORT || 3000,
    },
    db: {
      uri: process.env.MONGO_URI || 'mongodb://localhost:27017/music_library',
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'supersecretkey',
      expiresIn: '1h',
    },
  };