module.exports = {
    app: {
      port: process.env.PORT || 3000,
    },
    db: {
      uri: process.env.MONGO_URI || 'mongodb+srv://shivavision2025:Shivakumar@1234@cluster0.ti9zz.mongodb.net/',
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'supersecretkey',
      expiresIn: '1h',
    },
  };