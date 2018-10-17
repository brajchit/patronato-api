const createError = require('http-errors');
const debug = require('debug')('aqs:api');
const BUserModel = require('./bsUser.model');

/**
 * BUserController.js
 *
 * @description :: Server-side logic for managing BUsers.
 */
module.exports = {

  /**
   * BUserController.list()
   */
  list: (req, res, next) => {
    BUserModel.find(req.query.where, req.query.fields, req.query.sort)
      .then(BUsers => res.json(BUsers))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * BUserController.show()
   */
  show: (req, res, next) => {
    const { id } = req.params;
    BUserModel.findOne({ _id: id })
      .then((BUser) => {
        if (!BUser) {
          return next(createError(404, 'No such BUser'));
        }
        return res.json(BUser);
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * BUserController.create()
   */
  create: (req, res, next) => {
    debug('POST METHOD BODY: %O\n', req.body);
    const BUser = new BUserModel({
      name: req.body.name,
      imail: req.body.imail,
      phone: req.body.phone,
      message: req.body.message,
    });

    BUser.save()
      // .then(savedBUser => res.status(201).json(savedBUser))
      .then(savedBUser => res.redirect('http://www.bluesensordata.com'))
      .catch((err) => {
        next(createError(500, err));
      });
  },

};
