const mongoose = require('mongoose');

const { Schema } = mongoose;

const CategorySchema = new Schema({
  code: {
    type: String,
    required: [true, 'Category CODE is required'],
    // unique: true,
  },
  name: String,
  detail: String,
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    default: null,
  },
  parentCode: {
    type: String,
    default: null,
  },
  subcategories: [], // only for runtime populate
});

module.exports = mongoose.model('Category', CategorySchema);
