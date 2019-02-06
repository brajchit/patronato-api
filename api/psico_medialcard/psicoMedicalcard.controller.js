const createError = require('http-errors');
const PsicoMedicalCardModel = require('./psicoMedicalcard.model');

/**
 * PsicologiaMedicalCardController.js
 *
 * @description :: Server-side logic for managing PsicoMedicalCards.
 */
module.exports = {

  /**
   * PsicoMedicalCardController.list()
   */
  list: (req, res, next) => {
    PsicoMedicalCardModel.find(req.query.where, req.query.fields, req.query.sort)
      .then(PsicoMedicalCards => res.json(PsicoMedicalCards))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * PsicoMedicalCardController.show()
   */
  show: (req, res, next) => {
    const { id } = req.params;
    PsicoMedicalCardModel.findOne({ _id: id })
      .then((PsicoMedicalCard) => {
        if (!PsicoMedicalCard) {
          return next(createError(404, 'No such PsicoMedicalCard'));
        }
        return res.json(PsicoMedicalCard);
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * PsicoMedicalCardController.create()
   */
  create: (req, res, next) => {
    const PsicoMedicalCard = new PsicoMedicalCardModel({
      idpaciente: req.body.idpaciente,
      fechahora: req.body.fechahora,
      interpretaciones: req.body.interpretaciones,
      reactivosUsados: req.body.reactivosUsados,
      datosRelevantes: req.body.datosRelevantes,
    });
    PsicoMedicalCard.save()
      .then(savedMedicalCard => res.status(201).json(savedMedicalCard))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * PsicoMedicalCardController.update()
   */
  update: (req, res, next) => {
    const { id } = req.params;
    PsicoMedicalCardModel.findOne({ _id: id })
      .then((PsicoMedicalCard) => {
        if (!PsicoMedicalCard) {
          return next(createError(404, 'No such PsicoMedicalCard'));
        }
        const { interpretaciones } = req.body;
        const { reactivosUsados } = req.body;
        const { datosRelevantes } = req.body;

        // eslint-disable no-param-reassign
        PsicoMedicalCard.idpaciente = req.body.idpaciente || PsicoMedicalCard.idpaciente;
        PsicoMedicalCard.fechahora = req.body.fechahora || PsicoMedicalCard.fechahora;
        PsicoMedicalCard.interpretaciones = interpretaciones || PsicoMedicalCard.interpretaciones;
        PsicoMedicalCard.reactivosUsados = reactivosUsados || PsicoMedicalCard.reactivosUsados;
        PsicoMedicalCard.datosRelevantes = datosRelevantes || PsicoMedicalCard.datosRelevantes;

        PsicoMedicalCard.save()
          .then(savedMedicalCard => res.json(savedMedicalCard))
          .catch((saveErr) => {
            next(createError(500, saveErr));
          });
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * PsicoMedicalCardController.remove()
   */
  remove: (req, res, next) => {
    const { id } = req.params;
    PsicoMedicalCardModel.deleteOne({ _id: id })
      .then(deletedMedicalCard => res.status(204).json(deletedMedicalCard))
      .catch((err) => {
        next(createError(500, err));
      });
  },
};
