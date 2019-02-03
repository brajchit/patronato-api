/**
 * CIE10 model that will be used as cie instance
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const Cie = new Schema({
  code: String,
  descrip: String,
});

module.exports = mongoose.model('Cie', Cie);
