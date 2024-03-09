const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkDB';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose.connection;