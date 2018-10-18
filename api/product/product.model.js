/**
 * Product-master model that will be used as product instance in inventory
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  code: {
    type: String,
    required: [true, 'Product CODE required'],
  },
  name: {
    type: String,
    required: true,
  },
  detail: String,
  consumptionUnit: {
    type: String,
    required: true,
  },
  presentationUnit: {
    type: String,
    required: true,
  },
  packaging: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    // required: true,
  },
});

// const product = {
//   _id: 'PM01',
//   name: 'ProductMaster 01',
//   detail: 'some detail',
//   units: {
//     presentation: 'Kg',
//     consuption: 'Lbs',
//   },
//   packaging: 10,
// };

module.exports = mongoose.model('Product', ProductSchema);

//
