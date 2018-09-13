const CompanyModel = require('./company.model');

/**
 * CompanyController.js
 *
 * @description :: Server-side logic for managing Companys.
 */
module.exports = {

  /**
   * CompanyController.list()
   */
  list: (req, res) => {
    CompanyModel.find(req.query.where, req.query.fields, req.query.sort, (err, Companys) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Company.',
          error: err,
        });
      }
      return res.json(Companys);
    });
  },

  /**
   * CompanyController.show()
   */
  show: (req, res) => {
    const { id } = req.params;
    CompanyModel.findOne({ _id: id }, (err, Company) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Company.',
          error: err,
        });
      }
      if (!Company) {
        return res.status(404).json({
          message: 'No such Company',
        });
      }
      return res.json(Company);
    });
  },

  /**
   * CompanyController.create()
   */
  create: (req, res) => {
    const Company = new CompanyModel({
      businessId: req.body.businessId,
      name: req.body.name,
      description: req.body.description,
      farms: req.body.farms,
      werehouses: req.body.werehouses,
      rootUser: req.body.rootUser,
    });

    Company.save((err, savedCompany) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Company',
          error: err,
        });
      }
      return res.status(201).json(savedCompany);
    });
  },

  /**
   * CompanyController.update()
   */
  update: (req, res) => {
    const { id } = req.params;
    CompanyModel.findOne({
      _id: id,
    }, (err, Company) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Company',
          error: err,
        });
      }
      if (!Company) {
        return res.status(404).json({
          message: 'No such Company',
        });
      }

      // eslint-disable no-param-reassign
      Company.businessId = req.body.businessId || Company.businessId;
      Company.name = req.body.name || Company.name;
      Company.description = req.body.description || Company.description;
      Company.farms = req.body.farms || Company.farms;
      Company.werehouses = req.body.werehouses || Company.werehouses;
      Company.rootUser = req.body.rootUser || Company.rootUser;

      Company.save((saveErr, savedCompany) => {
        if (saveErr) {
          return res.status(500).json({
            message: 'Error when updating Company.',
            error: saveErr,
          });
        }

        return res.json(savedCompany);
      });
    });
  },

  /**
   * CompanyController.remove()
   */
  remove: (req, res) => {
    const { id } = req.params;
    CompanyModel.findByIdAndRemove(id, (err, deletedCompany) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Company.',
          error: err,
        });
      }
      return res.status(204).json(deletedCompany);
    });
  },
};
