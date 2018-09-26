const mongoose = require('mongoose');

const { Schema } = mongoose;

const InventorySchema = new Schema({
  _id: Schema.Types.ObjectId,
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
});

const WarehouseSchema = new Schema({
  name: String,
  detail: String,
  inventories: [InventorySchema],
});

module.exports = mongoose.model('Warehouse', WarehouseSchema);
