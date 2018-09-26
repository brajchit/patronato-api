const createError = require('http-errors');
const WarehouseModel = require('./warehouse.model');

/**
 * WarehouseController.js
 *
 * @description :: Server-side logic for managing Warehouses.
 */
module.exports = {

  /**
   * WarehouseController.list()
   */
  list: (req, res, next) => {
    WarehouseModel.find(req.query.where, req.query.fields, req.query.sort)
      .then(Warehouses => res.json(Warehouses))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * WarehouseController.show()
   */
  show: (req, res, next) => {
    const { id } = req.params;
    WarehouseModel.findOne({ _id: id })
      .then((Warehouse) => {
        if (!Warehouse) {
          return next(createError(404, 'No such Warehouse'));
        }
        return res.json(Warehouse);
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * WarehouseController.create()
   */
  create: (req, res, next) => {
    const Warehouse = new WarehouseModel({
      name: req.body.name,
      detail: req.body.detail,
      inventories: req.body.inventories,
    });

    Warehouse.save()
      .then(savedWarehouse => res.status(201).json(savedWarehouse))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * WarehouseController.update()
   */
  update: (req, res, next) => {
    const { id } = req.params;
    WarehouseModel.findOne({ _id: id })
      .then((Warehouse) => {
        if (!Warehouse) {
          return next(createError(404, 'No such Warehouse'));
        }
        // eslint-disable no-param-reassign
        Warehouse.name = req.body.name || Warehouse.name;
        Warehouse.detail = req.body.detail || Warehouse.detail;
        Warehouse.inventories = req.body.inventories || Warehouse.inventories;

        Warehouse.save()
          .then(savedWarehouse => res.status(201).json(savedWarehouse))
          .catch((err) => {
            next(createError(500, err));
          });
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * WarehouseController.remove()
   */
  remove: (req, res, next) => {
    const { id } = req.params;
    WarehouseModel.deleteOne({ _id: id })
      .then(deletedWarehouse => res.status(204).json(deletedWarehouse))
      .catch((err) => {
        next(createError(500, err));
      });
  },
};
