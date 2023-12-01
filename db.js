// db.js
const mongoose = require('mongoose');

const atlasConnectionURI = 'mongodb+srv://user1:user1@cluster0.1kvcm2i.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(atlasConnectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

module.exports = mongoose;
