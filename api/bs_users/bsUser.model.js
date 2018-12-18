const mongoose = require('mongoose');

const { Schema } = mongoose;

const BSUserSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  datetime: Date,
  ip: String,
  ips: [String],
});

module.exports = mongoose.model('BUsers', BSUserSchema);
