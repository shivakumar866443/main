module.exports = {
    app: {
      port: process.env.PORT || 3000,
    },
    db: {
      uri: 'mongodb+srv://shivavision2025:Shiva1234@cluster0.ti9zz.mongodb.net/MyDatabase?retryWrites=true&w=majority&appName=Cluster0'
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'supersecretkey',
      expiresIn: '1h',
    },
  };