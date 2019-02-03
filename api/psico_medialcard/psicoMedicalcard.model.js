/**
 * Psicologia model that will be used as tfisicaMedicalcard instance
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const PsicoMedicalCardSchema = new Schema({
  idpaciente: String,
  fechahora: Date,
  interpretaciones: String,
  reactivosUsados: String,
  datosRelevantes: String,
});

module.exports = mongoose.model('PsicoMedicalCard', PsicoMedicalCardSchema);

// const eg = {
//   "idpaciente": "String",
//   "fechahora": "Date",
//   "interpretaciones": "String",
//   "reactivosUsados": "String",
//   "datosRelevantes": "String",
// };
