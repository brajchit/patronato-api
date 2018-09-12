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
  list: (req, res) => {
    CategoryModel.find(req.query.where, req.query.fields, req.query.sort, (err, Categories) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Category.',
          error: err,
        });
      }
      return res.json(Categories);
    });
  },

  /**
   * CategoryController.show()
   */
  show: (req, res) => {
    const { id } = req.params;
    CategoryModel.findOne({ _id: id }, (err, Category) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Category.',
          error: err,
        });
      }
      if (!Category) {
        return res.status(404).json({
          message: 'No such Category',
        });
      }

      // add subcategories
      const parentCategoryId = Category._id;// eslint-disable-inline no-underscore-dangle
      CategoryModel.find({ parent: parentCategoryId })
        .then((subcategories) => {
          Category.subcategories = subcategories;
          return res.json(Category);
        }).catch((subaCatErr) => {
          return res.status(500).json({
            message: 'Error when getting Category.',
            error: subaCatErr,
          });
        });
    });
  },

  /**
   * CategoryController.create()
   */
  create: (req, res) => {
    const Category = new CategoryModel({
      code: req.body.code,
      name: req.body.name,
      detail: req.body.detail,
      parent: req.body.parent,
    });

    Category.save((err, savedCategory) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Category',
          error: err,
        });
      }
      return res.status(201).json(savedCategory);
    });
  },

  /**
   * CategoryController.update()
   */
  update: (req, res) => {
    const { id } = req.params;
    CategoryModel.findOne({ _id: id }, (err, Category) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Category',
          error: err,
        });
      }
      if (!Category) {
        return res.status(404).json({
          message: 'No such Category',
        });
      }

      // eslint-disable no-param-reassign
      Category.code = req.body.code || Category.code;
      Category.name = req.body.name || Category.name;
      Category.detail = req.body.detail || Category.detail;
      Category.parent = req.body.parent || Category.parent;

      Category.save((saveErr, savedCategory) => {
        if (saveErr) {
          return res.status(500).json({
            message: 'Error when updating Category.',
            error: saveErr,
          });
        }

        return res.json(savedCategory);
      });
    });
  },

  /**
   * CategoryController.remove()
   */
  remove: (req, res) => {
    const { id } = req.params;
    // CategoryModel.findOneAndDelete({ _id: id }, (err, deletedCategory) => {
    CategoryModel.remove({ _id: id }, (err, deletedCategory) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Category.',
          error: err,
        });
      }
      return res.status(204).json(deletedCategory);
    });
  },
};
