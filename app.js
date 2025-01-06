// app.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/config');
const routes = require('./src/routes');


const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(config.db.uri).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Database connection error:', err);
});

// Routes
app.use('/api/v1',routes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || 'Internal Server Error',
  });
});

// Start Server
const PORT = config.app.port || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;