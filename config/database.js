// database configuration

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASEURL || 'mongodb://localhost:27017/blog-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error: ', err);
    process.exit(1);
  }
};

module.exports = connectDB;