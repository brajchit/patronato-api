/**
 * Terapia Fisica model that will be used as tfisicaMedicalcard instance
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const TFisicaMedicalCardSchema = new Schema({
  idpaciente: {
    type: String,
    unique: true,
    required: [true, 'ID_Paciente is required'],
  },
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
  tfisioterap: {
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
  seguimiento: [{
    fecha: Date,
    tratamiento: String,
    indicaciones: String,
  }],
});


// const a = {
//   "idpaciente": "1002",
//   "fechahora": "2019-01-25T10:28",
//   "consulta": {
//     "motivo": "Gripe"
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
//       "otros": false
//     },
//     "familiares": {
//       "hipertensionArterial": true,
//       "diabetes": true,
//       "infartoDelMiocardio": true,
//       "demencia": true,
//       "cancer": true,
//       "otros": false
//     },
//     "descripAntYOtros": "String"
//   },
//   "medUsoFrec": {
//     "utilizacion": "String",
//     "nombre": "String",
//     "restricAMedic": {
//       "resp": true,
//       "cual": "String"
//     }
//   },
//   "histProblemFunc": {
//     "description": "String"
//   },
//   "anamesisDolor": {
//     "duracion": "String",
//     "escalaIntensidad": 4,
//     "frecuencia": "String",
//     "horario": "String",
//     "evolucion": "String"
//   },
//   "exploFisica": {
//     "observaciones": "String",
//     "impDiagnostica": "String"
//   },
//   "tfisioterap": {
//     "mquimicos": {
//       "ultrasonido": true,
//       "elecEstim": true,
//       "magnetoTerapia": true,
//       "laser": true,
//       "nebulizacion": true,
//       "ondasChoque": true,
//       "parafina": true
//     },
//     "mfisicos": {
//       "compresQuimicas": "String",
//       "crioterapia": "String",
//       "masoterapai": "String",
//       "to": "String"
//     },
//     "ejerTerapeuticos": {
//       "activos": true,
//       "pasivos": true,
//       "activosAsistidos": true,
//       "ActivosResistidos": true
//     },
//     "nota": "String"
//   },
//   "seguimiento": [
//     {
//       "fecha": "2019-01-25T10:28",
//       "tratamiento": "String",
//       "indicaciones": "String"
//     }
//   ]
// }
module.exports = mongoose.model('TFisicaMedicalCard', TFisicaMedicalCardSchema);
