const mongoose = require('mongoose');

const { Schema } = mongoose;

const InventorySchema = new Schema({
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
});

const WarehouseSchema = new Schema({
  name: String,
  detail: String,
  inventories: [InventorySchema],
});

module.exports = mongoose.model('Warehouse', WarehouseSchema);
