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

// const movement = {
//   _id: MV01,
//   product: ObjectId(PM01),
//   fecha: Fecha_MV01,
//   detail: "Compra F01",
//   movType: {
//     mov: 'INGR',
//     byAdjustment: true,
//   },
//   mov: {
//     quantity: {
//       packaging: 2, // (20 Kg | 40 Lbs),
//       presentationUnit: 20,
//       consuptionUnit: 40,
//     },
//     price: {
//       packaging: $10, // (20 Kg | 40 Lbs),
//       presentationUnit: 20,
//       consuptionUnit: 40,
//     },
//     total: $20,
//   },
//   stock: {
//     quantity: {
//       packaging: 2, // (20 Kg | 40 Lbs),
//       presentationUnit: 20,
//       consuptionUnit: 40,
//     },
//     price: 10,
//     total: 20,
//   }
// }

module.exports = mongoose.model('Product', ProductSchema);

//
