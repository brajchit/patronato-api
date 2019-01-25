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
  medUsoFrec: {
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
  tfisioterapeutico: {
    mquimicos: {
      ultrasonido: Boolean,
      elecEstim: Boolean,
      magnetoTerapia: Boolean,
      laser: Boolean,
      nebulizacion: Boolean,
      ondasChoque: Boolean,
      parafina: Boolean,
    },
    mfisicos: {
      compresQuimicas: String,
      crioterapia: String,
      masoterapai: String,
      to: String,
    },
    ejerTerapeuticos: {
      activos: Boolean,
      pasivos: Boolean,
      activosAsistidos: Boolean,
      ActivosResistidos: Boolean,
    },
    nota: String,
  },
});


// let a = {
//   "idpaciente": "String",
//   "fechahora": "2019-01-25T11:28:58",
//   "consulta": {
//     "motivo": "String",
//   },
//   "antecedentes": {
//     "personales": {
//       "hipertensionArterial": true,
//       "diabetes": true,
//       "colesterolAlto": true,
//       "osteoartritis": true,
//       "acv": true,
//       "infarto": true,
//       "arritmias": true,
//       "cancer": true,
//       "epatitis": true,
//       "tuberculosis": true,
//       "transfuciones": true,
//       "accidentes": true,
//       "otros": true,
//     },
//     "familiares": {
//       "hipertensionArterial": true,
//       "diabetes": true,
//       "infartoDelMiocardio": true,
//       "demencia": true,
//       "cancer": true,
//       "otros": true,
//     },
//     "descripAntYOtros": "String",
//   },
//   "medUsoFrec": {
//     "utilizacion": "String",
//     "nombre": "String",
//     "restricAMedic": {
//       "resp": true,
//       "cual": "String",
//     },
//   },
//   "histProblemFunc": {
//     "description": "String",
//   },
//   "anamesisDolor": {
//     "duracion": "String",
//     "escalaIntensidad": Number,
//     "frecuencia": "String",
//     "horario": "String",
//     "evolucion": "String",
//   },
//   "exploFisica": {
//     "observaciones": "String",
//     "impDiagnostica": "String",
//   },
//   "tfisioterapeutico": {
//     "mquimicos": {
//       "ultrasonido": true,
//       "elecEstim": true,
//       "magnetoTerapia": true,
//       "laser": true,
//       "nebulizacion": true,
//       "ondasChoque": true,
//       "parafina": true,
//     },
//     "mfisicos": {
//       "compresQuimicas": "String",
//       "crioterapia": "String",
//       "masoterapai": "String",
//       "to": "String",
//     },
//     "ejerTerapeuticos": {
//       "activos": true,
//       "pasivos": true,
//       "activosAsistidos": true,
//       "ActivosResistidos": true,
//     },
//     "nota": "String",
//   }
// }
module.exports = mongoose.model('TFisicaMedicalCard', TFisicaMedicalCardSchema);
