const createError = require('http-errors');
const MedicalCardModel = require('./medicalcard.model');

/**
 * MedicalCardController.js
 *
 * @description :: Server-side logic for managing MedicalCards.
 */
module.exports = {

  /**
   * MedicalCardController.list()
   */
  list: (req, res, next) => {
    MedicalCardModel.find(req.query.where, req.query.fields, req.query.sort)
      .then(MedicalCards => res.json(MedicalCards))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * MedicalCardController.show()
   */
  show: (req, res, next) => {
    const { id } = req.params;
    MedicalCardModel.findOne({ _id: id })
      .then((MedicalCard) => {
        if (!MedicalCard) {
          return next(createError(404, 'No such MedicalCard'));
        }
        return res.json(MedicalCard);
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * MedicalCardController.create()
   */
  create: (req, res, next) => {
    const MedicalCard = new MedicalCardModel({
      namepaciente: req.body.namepaciente,
      consulta: req.body.consulta,
      antecedentes: req.body.antecedentes,
      problemaActual: req.body.problemaActual,
      preConsulta: req.body.preConsulta,
      examenFisico: req.body.examenFisico,
      diagnostic: req.body.diagnostic,
      tratamiento: req.body.tratamiento,
      evolucionYPrescrip: req.body.evolucionYPrescrip,
    });
    MedicalCard.save()
      .then(savedMedicalCard => res.status(201).json(savedMedicalCard))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * MedicalCardController.update()
   */
  update: (req, res, next) => {
    const { id } = req.params;
    MedicalCardModel.findOne({ _id: id })
      .then((MedicalCard) => {
        if (!MedicalCard) {
          return next(createError(404, 'No such MedicalCard'));
        }
        // eslint-disable no-param-reassign
        MedicalCard.namepaciente = req.body.namepaciente || MedicalCard.namepaciente;
        MedicalCard.consulta = req.body.consulta || MedicalCard.consulta;
        MedicalCard.antecedentes = req.body.antecedentes || MedicalCard.antecedentes;
        MedicalCard.problemaActual = req.body.problemaActual || MedicalCard.problemaActual;
        MedicalCard.preConsulta = req.body.preConsulta || MedicalCard.preConsulta;
        MedicalCard.examenFisico = req.body.examenFisico || MedicalCard.examenFisico;
        MedicalCard.diagnostic = req.body.diagnostic || MedicalCard.diagnostic;
        MedicalCard.tratamiento = req.body.tratamiento || MedicalCard.tratamiento;
        MedicalCard.evolucionYPrescrip = req.body.evolucionYPrescrip || MedicalCard.evolucionYPrescrip;

        MedicalCard.save()
          .then(savedMedicalCard => res.json(savedMedicalCard))
          .catch((saveErr) => {
            next(createError(500, saveErr));
          });
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * MedicalCardController.remove()
   */
  remove: (req, res, next) => {
    const { id } = req.params;
    MedicalCardModel.deleteOne({ _id: id })
      .then(deletedMedicalCard => res.status(204).json(deletedMedicalCard))
      .catch((err) => {
        next(createError(500, err));
      });
  },
};
