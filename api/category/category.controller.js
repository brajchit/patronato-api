const createError = require('http-errors');
const CategoryModel = require('./category.model');

/**
 * CategoryController.js
 *
 * @description :: Server-side logic for managing Categories.
 */
module.exports = {

  /**
   * CategoryController.list()
   */
  list: (req, res, next) => {
    CategoryModel.find(req.query.where, req.query.fields, req.query.sort)
      .then(Categories => res.json(Categories))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * CategoryController.show()
   */
  show: (req, res, next) => {
    const { id } = req.params;
    CategoryModel.findOne({ _id: id })
      .then((Category) => {
        if (!Category) {
          return next(createError(404, 'No such Category'));
        }
        // add subcategories
        const parentCategoryId = Category._id;// eslint-disable-inline no-underscore-dangle
        CategoryModel.find({ parent: parentCategoryId })
          .then((subcategories) => {
            Category.subcategories = subcategories;
            return res.json(Category);
          }).catch((subCatErr) => {
            next(createError(500, subCatErr));
          });
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * CategoryController.create()
   */
  create: (req, res, next) => {
    const Category = new CategoryModel({
      code: req.body.code,
      name: req.body.name,
      detail: req.body.detail,
      parent: req.body.parent,
      parentCode: req.body.parentCode,
    });

    Category.save()
      .then(savedCategory => res.status(201).json(savedCategory))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * CategoryController.update()
   */
  update: (req, res, next) => {
    const { id } = req.params;
    CategoryModel.findOne({ _id: id })
      .then((Category) => {
        if (!Category) {
          return next(createError(404, 'No such Category'));
        }
        // eslint-disable no-param-reassign
        Category.code = req.body.code || Category.code;
        Category.name = req.body.name || Category.name;
        Category.detail = req.body.detail || Category.detail;
        Category.parent = req.body.parent || Category.parent;
        Category.parentCode = req.body.parentCode || Category.parentCode;

        Category.save()
          .then(savedCategory => res.json(savedCategory))
          .catch((saveErr) => {
            next(createError(500, saveErr));
          });
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * CategoryController.remove()
   */
  remove: (req, res, next) => {
    const { id } = req.params;
    // CategoryModel.findOneAndDelete({ _id: id }, (err, deletedCategory) => {
    CategoryModel.remove({ _id: id })
      .then(deletedCategory => res.status(204).json(deletedCategory))
      .catch((err) => {
        next(createError(500, err));
      });
  },
};
