const mongoose = require('mongoose');

const { Schema } = mongoose;

const CategorySchema = new Schema({
  code: {
    type: String,
    required: [true, 'Category CODE is required'],
    unique: true,
  },
  name: String,
  detail: String,
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    default: null,
  },
  subcategories: [],
});

module.exports = mongoose.model('Category', CategorySchema);
