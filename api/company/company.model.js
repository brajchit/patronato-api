const mongoose = require('mongoose');

const { Schema } = mongoose;

const FarmSchema = new Schema({
  name: String,
  detail: String,
  area: {
    type: Number, // Has
    require: true,
  },
});

const CompanySchema = new Schema({
  businessId: {
    type: String,
    required: true,
  },
  name: String,
  detail: String,
  farms: [FarmSchema],
  warehouses: [{
    type: Schema.Types.ObjectId,
    ref: 'Warehouse',
  }],
  // rootUser: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  // },
});

module.exports = mongoose.model('Company', CompanySchema);
