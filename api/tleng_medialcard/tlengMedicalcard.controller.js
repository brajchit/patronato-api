const createError = require('http-errors');
const TLengMedicalCardModel = require('./tlengMedicalcard.model');

/**
 * TerapiaLenguajeMedicalCardController.js
 *
 * @description :: Server-side logic for managing TLengMedicalCards.
 */
module.exports = {

  /**
   * TLengMedicalCardController.list()
   */
  list: (req, res, next) => {
    TLengMedicalCardModel.find(req.query.where, req.query.fields, req.query.sort)
      .then(tLengMedicalCards => res.json(tLengMedicalCards))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * TLengMedicalCardController.show()
   */
  show: (req, res, next) => {
    const { id } = req.params;
    TLengMedicalCardModel.findOne({ _id: id })
      .then((TLengMedicalCard) => {
        if (!TLengMedicalCard) {
          return next(createError(404, 'No such TLengMedicalCard'));
        }
        return res.json(TLengMedicalCard);
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * TLengMedicalCardController.create()
   */
  create: (req, res, next) => {
    const TLengMedicalCard = new TLengMedicalCardModel({
      idpaciente: req.body.idpaciente,
      fechahora: req.body.fechahora,
      consulta: req.body.consulta,
      anamPersonal: req.body.anamPersonal,
      desarrolloMotor: req.body.desarrolloMotor,
      desarrolloLeng: req.body.desarrolloLeng,
      comport: req.body.comport,
      anamFamiliar: req.body.anamFamiliar,
      desPsicosocial: req.body.desPsicosocial,
      diagnosticos: req.body.diagnosticos,
      tratamiento: req.body.tratamiento,
      recomends: req.body.recomends,
      observs: req.body.observs,
      responsable: req.body.responsable,
      dificults: req.body.dificults,
    });
    TLengMedicalCard.save()
      .then(savedMedicalCard => res.status(201).json(savedMedicalCard))
      .catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * TLengMedicalCardController.update()
   */
  update: (req, res, next) => {
    const { id } = req.params;
    TLengMedicalCardModel.findOne({ _id: id })
      .then((TLMedicalCard) => {
        if (!TLMedicalCard) {
          return next(createError(404, 'No such TLMedicalCard'));
        }
        // eslint-disable no-param-reassign
        TLMedicalCard.idpaciente = req.body.idpaciente || TLMedicalCard.idpaciente;
        TLMedicalCard.fechahora = req.body.fechahora || TLMedicalCard.fechahora;
        TLMedicalCard.consulta = req.body.consulta || TLMedicalCard.consulta;
        TLMedicalCard.anamPersonal = req.body.anamPersonal || TLMedicalCard.anamPersonal;
        TLMedicalCard.desarrolloMotor = req.body.desarrolloMotor || TLMedicalCard.desarrolloMotor;
        TLMedicalCard.desarrolloLeng = req.body.desarrolloLeng || TLMedicalCard.desarrolloLeng;
        TLMedicalCard.comport = req.body.comport || TLMedicalCard.comport;
        TLMedicalCard.anamFamiliar = req.body.anamFamiliar || TLMedicalCard.anamFamiliar;
        TLMedicalCard.desPsicosocial = req.body.desPsicosocial || TLMedicalCard.desPsicosocial;
        TLMedicalCard.diagnosticos = req.body.diagnosticos || TLMedicalCard.diagnosticos;
        TLMedicalCard.tratamiento = req.body.tratamiento || TLMedicalCard.tratamiento;
        TLMedicalCard.recomends = req.body.recomends || TLMedicalCard.recomends;
        TLMedicalCard.observs = req.body.observs || TLMedicalCard.observs;
        TLMedicalCard.responsable = req.body.responsable || TLMedicalCard.responsable;
        TLMedicalCard.dificults = req.body.dificults || TLMedicalCard.dificults;

        TLMedicalCard.save()
          .then(savedMedicalCard => res.json(savedMedicalCard))
          .catch((saveErr) => {
            next(createError(500, saveErr));
          });
      }).catch((err) => {
        next(createError(500, err));
      });
  },

  /**
   * TLengMedicalCardController.remove()
   */
  remove: (req, res, next) => {
    const { id } = req.params;
    TLengMedicalCardModel.deleteOne({ _id: id })
      .then(deletedMedicalCard => res.status(204).json(deletedMedicalCard))
      .catch((err) => {
        next(createError(500, err));
      });
  },
};
