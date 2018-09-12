const mongoose = require('mongoose');

const { Schema } = mongoose;

const CompanySchema = new Schema({
  businessId: {
    type: String,
    required: true,
  },
  name: String,
  description: String,
  farms: [],
  werehouses: [],
  // rootUser: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  // },
});

module.exports = mongoose.model('Company', CompanySchema);
