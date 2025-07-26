require('dotenv').config(); 
const express = require('express');
const app = express();
const uploadRoute = require('./routes/upload');
const apiRoute = require('./routes/api');
const errorHandler = require('./middlewares/errorHandler');
const path = require('path');

// Middleware
app.use(express.json());

// Static
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api', apiRoute);
app.use('/api', uploadRoute);

// 404 handler for unmatched routes
app.use((req, res, next) => {
  res.status(404).json({
    error: {
      message: `Cannot ${req.method} ${req.originalUrl}`
    }
  });
});


app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
