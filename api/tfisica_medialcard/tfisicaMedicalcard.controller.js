const createError = require('http-errors');
const TFisicaMedicalCardModel = require('./tfisicaMedicalcard.model');

/**
 * TerapiaFisicaMedicalCardController.js
 *
 * @description :: Server-side logic for managing TFisicaMedicalCards.
 */
module.exports = {

  /**
   * TFisicaMedicalCardController.list()
   */
  list: (req, res, next) => {
    TFisicaMedicalCardModel.find(req.query.where, req.query.fields, req.query.sort)
      .then(TFisicaMedicalCards => res.json(TFisicaMedicalCards))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * TFisicaMedicalCardController.show()
   */
  show: (req, res, next) => {
    const { id } = req.params;
    TFisicaMedicalCardModel.findOne({ _id: id })
      .then((TFisicaMedicalCard) => {
        if (!TFisicaMedicalCard) {
          return next(createError(404, 'No such TFisicaMedicalCard'));
        }
        return res.json(TFisicaMedicalCard);
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * TFisicaMedicalCardController.create()
   */
  create: (req, res, next) => {
    const TFisicaMedicalCard = new TFisicaMedicalCardModel({
      idpaciente: req.body.idpaciente,
      fechahora: req.body.fechahora,
      consulta: req.body.consulta,
      antecedentes: req.body.antecedentes,
      medUsoFrec: req.body.medUsoFrec,
      histProblemFunc: req.body.histProblemFunc,
      anamesisDolor: req.body.anamesisDolor,
      exploFisica: req.body.exploFisica,
      tfisioterap: req.body.tfisioterap,
      seguimiento: req.body.seguimiento,
    });
    TFisicaMedicalCard.save()
      .then(savedMedicalCard => res.status(201).json(savedMedicalCard))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * TFisicaMedicalCardController.update()
   */
  update: (req, res, next) => {
    const { id } = req.params;
    TFisicaMedicalCardModel.findOne({ _id: id })
      .then((TFMedicalCard) => {
        if (!TFMedicalCard) {
          return next(createError(404, 'No such TFMedicalCard'));
        }
        // eslint-disable no-param-reassign
        TFMedicalCard.idpaciente = req.body.idpaciente || TFMedicalCard.idpaciente;
        TFMedicalCard.fechahora = req.body.fechahora || TFMedicalCard.fechahora;
        TFMedicalCard.consulta = req.body.consulta || TFMedicalCard.consulta;
        TFMedicalCard.antecedentes = req.body.antecedentes || TFMedicalCard.antecedentes;
        TFMedicalCard.medUsoFrec = req.body.medUsoFrec || TFMedicalCard.medUsoFrec;
        TFMedicalCard.histProblemFunc = req.body.histProblemFunc || TFMedicalCard.histProblemFunc;
        TFMedicalCard.anamesisDolor = req.body.anamesisDolor || TFMedicalCard.anamesisDolor;
        TFMedicalCard.exploFisica = req.body.exploFisica || TFMedicalCard.exploFisica;
        TFMedicalCard.tfisioterap = req.body.tfisioterap || TFMedicalCard.tfisioterap;
        TFMedicalCard.seguimiento = req.body.seguimiento || TFMedicalCard.seguimiento;

        TFMedicalCard.save()
          .then(savedMedicalCard => res.json(savedMedicalCard))
          .catch((saveErr) => {
            next(createError(500, saveErr));
          });
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * TFisicaMedicalCardController.remove()
   */
  remove: (req, res, next) => {
    const { id } = req.params;
    TFisicaMedicalCardModel.deleteOne({ _id: id })
      .then(deletedMedicalCard => res.status(204).json(deletedMedicalCard))
      .catch((err) => {
        next(createError(500, err));
      });
  },
};
