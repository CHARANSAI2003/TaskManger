require('dotenv').config();
const app = require('./src/app');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 3000, () => {
      console.log('Server is running on port', process.env.PORT || 3000);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });