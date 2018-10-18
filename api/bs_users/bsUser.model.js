const mongoose = require('mongoose');

const { Schema } = mongoose;

const WarehouseSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  datetime: Date,
});

module.exports = mongoose.model('BUsers', WarehouseSchema);
