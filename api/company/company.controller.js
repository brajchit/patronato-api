const createError = require('http-errors');
const CompanyModel = require('./company.model');

/**
 * CompanyController.js
 *
 * @description :: Server-side logic for managing Companies.
 */
module.exports = {

  /**
   * CompanyController.list()
   */
  list: (req, res, next) => {
    CompanyModel.find(req.query.where, req.query.fields, req.query.sort)
      .then(Companies => res.json(Companies))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * CompanyController.show()
   */
  show: (req, res, next) => {
    const { id } = req.params;
    // CompanyModel.findOne({ _id: id }, (err, Company) => {
    CompanyModel.findOne({ _id: id })
      .then((Company) => {
        if (!Company) {
          return next(createError(404, 'No such Company'));
        }
        return res.json(Company);
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * CompanyController.create()
   */
  create: (req, res, next) => {
    const Company = new CompanyModel({
      businessId: req.body.businessId,
      name: req.body.name,
      description: req.body.description,
      farms: req.body.farms,
      warehouses: req.body.warehouses,
      rootUser: req.body.rootUser,
    });

    Company.save()
      .then(savedCompany => res.status(201).json(savedCompany))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * CompanyController.update()
   */
  update: (req, res, next) => {
    const { id } = req.params;
    // CompanyModel.findOne({ _id: id }, (err, Company) => {
    CompanyModel.findOne({ _id: id })
      .then((Company) => {
        if (!Company) {
          return next(createError(404, 'No such Company'));
        }
        // eslint-disable no-param-reassign
        Company.businessId = req.body.businessId || Company.businessId;
        Company.name = req.body.name || Company.name;
        Company.description = req.body.description || Company.description;
        Company.farms = req.body.farms || Company.farms;
        Company.warehouses = req.body.warehouses || Company.warehouses;

        Company.save()
          .then(savedCompany => res.status(201).json(savedCompany))
          .catch((err) => {
            next(createError(500, err));
          });
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * CompanyController.remove()
   */
  remove: (req, res, next) => {
    const { id } = req.params;
    CompanyModel.deleteOne({ _id: id })
      .then(deletedCompany => res.status(204).json(deletedCompany))
      .catch((err) => {
        next(createError(500, err));
      });
  },
};
