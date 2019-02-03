const createError = require('http-errors');
const CieModel = require('./cie.model');

/**
 * CieController.js
 *
 * @description :: Server-side logic for managing CIE10.
 */
module.exports = {

  /**
   * CieController.list()
   */
  list: (req, res, next) => {
    console.log(req.query.where);
    CieModel.find(req.query.where, req.query.fields, req.query.sort)
      .then(cies => res.json(cies))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * CieController.show()
   */
  show: (req, res, next) => {
    const { id } = req.params;
    CieModel.findOne({ code: id })
      .then((cie) => {
        if (!cie) {
          return next(createError(404, 'No such cie'));
        }
        return res.json(cie);
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * CieController.create()
   */
  create: (req, res, next) => {
    const Cie = new CieModel({
      code: req.body.code,
      descrip: req.body.descrip,
    });
    Cie.save()
      .then(cie => res.status(201).json(cie))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * CieController.update()
   */
  update: (req, res, next) => {
    const { id } = req.params;
    CieModel.findOne({ code: id })
      .then((Cie) => {
        if (!Cie) {
          return next(createError(404, 'No such Cie'));
        }
        // eslint-disable no-param-reassign
        Cie.code = req.body.code || Cie.code;
        Cie.descrip = req.body.descrip || Cie.descrip;

        Cie.save()
          .then(savedCie => res.json(savedCie))
          .catch((saveErr) => {
            next(createError(500, saveErr));
          });
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * CieController.remove()
   */
  remove: (req, res, next) => {
    const { id } = req.params;
    CieModel.deleteOne({ code: id })
      .then(deletedCie => res.status(204).json(deletedCie))
      .catch((err) => {
        next(createError(500, err));
      });
  },
};
