const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

module.exports = mongoose.connection;