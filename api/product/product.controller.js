const createError = require('http-errors');
const ProductModel = require('./product.model');

/**
 * ProductController.js
 *
 * @description :: Server-side logic for managing Products.
 */
module.exports = {

  /**
   * ProductController.list()
   */
  list: (req, res, next) => {
    ProductModel.find(req.query.where, req.query.fields, req.query.sort)
      .then(Products => res.json(Products))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * ProductController.show()
   */
  show: (req, res, next) => {
    const { id } = req.params;
    ProductModel.findOne({ _id: id })
      .then((Product) => {
        if (!Product) {
          return next(createError(404, 'No such Product'));
        }
        return res.json(Product);
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * ProductController.create()
   */
  create: (req, res, next) => {
    const Product = new ProductModel({
      code: req.body.code,
      name: req.body.name,
      detail: req.body.detail,
      consumptionUnit: req.body.consumptionUnit,
      presentationUnit: req.body.presentationUnit,
      packaging: req.body.packaging,
      category: req.body.category,
    });

    Product.save()
      .then(savedProduct => res.status(201).json(savedProduct))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * ProductController.update()
   */
  update: (req, res, next) => {
    const { id } = req.params;
    ProductModel.findOne({ _id: id })
      .then((Product) => {
        if (!Product) {
          return next(createError(404, 'No such Product'));
        }
        // eslint-disable no-param-reassign
        Product.code = req.body.code || Product.code;
        Product.name = req.body.name || Product.name;
        Product.detail = req.body.detail || Product.detail;
        Product.consumptionUnit = req.body.consumptionUnit || Product.consumptionUnit;
        Product.presentationUnit = req.body.presentationUnit || Product.presentationUnit;
        Product.packaging = req.body.packaging || Product.packaging;
        Product.category = req.body.category || Product.category;

        Product.save()
          .then(savedProduct => res.json(savedProduct))
          .catch((saveErr) => {
            next(createError(500, saveErr));
          });
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * ProductController.remove()
   */
  remove: (req, res, next) => {
    const { id } = req.params;
    ProductModel.deleteOne({ _id: id })
      .then(deletedProduct => res.status(204).json(deletedProduct))
      .catch((err) => {
        next(createError(500, err));
      });
  },
};
