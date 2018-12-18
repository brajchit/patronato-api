/**
 * Product-master model that will be used as product instance in inventory
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const MedicalCardSchema = new Schema({
  namepaciente: String,
  consulta: {
    motivo: String,
  },
  antecedentes: {
    antecedentespaciente: String,
    antecedentesfapaciente: String,
  },
  problemaActual: {
    problemaactualpaciente: String,
  },
  preConsulta: {
    revactorganospaciente: String,
    sigsVitYAntropaciente: String,
  },
  examenFisico: {
    examFisicoReg: String,
  },
  diagnostic: [
    {
      description: String,
      cie: String,
      pre: String,
      def: String,
    },
  ],
  tratamiento: {
    tratamiento: String,
  },
  evolucionYPrescrip: {
    evolucion: String,
    prescrip: String,
  },
});

module.exports = mongoose.model('MedicalCard', MedicalCardSchema);

// let eg = {
//   "namepaciente": "paciente 1",
//   "consulta": {
//     "motivo": "Gripe"
//   },
//   "antecedentes": {
//     "antecedentespaciente": "No tiene antecedes",
//     "antecedentesfapaciente": "Familianres con antecedes"
//   },
//   "problemaActual": {
//     "problemaactualpaciente": "Gripe moderada"
//   },
//   "preConsulta": {
//     "revactorganospaciente": "Ningun valor",
//     "sigsVitYAntropaciente": "Signos vitales estables"
//   },
//   "examenFisico": {
//     "examFisicoReg": "Resultados del examen"
//   },
//   "diagnostic": [
//     {
//       "description": "Este es un resultado positivo",
//       "cie": "valor",
//       "pre": "valor",
//       "def": "resultado"
//     },
//     {
//       "description": "Este es un segundo resultado positivo",
//       "cie": "valor",
//       "pre": "valor",
//       "def": "resultado"
//     },
//   ],
//   "tratamiento": {
//     "tratamiento": "tratamiento a seguir"
//   },
//   "evolucionYPrescrip": {
//     "evolucion": "Evolucion AA",
//     "prescrip": "Require prescripcion BB"
//   },
// };
