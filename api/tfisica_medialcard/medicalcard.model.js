/**
 * Terapia Fisica model that will be used as tfisicaMedicalcard instance
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const TFisicaMedicalCardSchema = new Schema({
  idpaciente: String,
  fechahora: Date,
  consulta: {
    motivo: String,
  },
  antecedentes: {
    personales: {
      hipertensionArterial: Boolean,
      diabetes: Boolean,
      colesterolAlto: Boolean,
      osteoartritis: Boolean,
      acv: Boolean,
      infarto: Boolean,
      arritmias: Boolean,
      cancer: Boolean,
      epatitis: Boolean,
      tuberculosis: Boolean,
      transfuciones: Boolean,
      accidentes: Boolean,
      otros: Boolean,
    },
    familiares: {
      hipertensionArterial: Boolean,
      diabetes: Boolean,
      infartoDelMiocardio: Boolean,
      demencia: Boolean,
      cancer: Boolean,
      otros: Boolean,
    },
    descripAntYOtros: String,
  },
  medicamentosUsoFrec: {
    utilizacion: String,
    nombre: String,
    restricAMedic: {
      resp: Boolean,
      cual: String,
    },
  },
  histProblemFunc: {
    description: String,
  },
  anamesisDolor: {
    duracion: String,
    escalaIntensidad: Number,
    frecuencia: String,
    horario: String,
    evolucion: String,
  },
  exploFisica: {
    observaciones: String,
    impDiagnostica: String,
  },
});

module.exports = mongoose.model('MedicalCard', TFisicaMedicalCardSchema);
