/**
 * Terapia Leng model that will be used as tfisicaMedicalcard instance
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const TLengMedicalCardSchema = new Schema({
  idpaciente: {
    type: String,
    required: [true, 'ID_Paciente is required'],
  },
  consulta: {
    motivo: String,
    remitio: String,
    edadSintoms: {
      years: Number,
      months: Number,
    },
    tratAnt: Boolean,
  },
  anamPersonal: {
    edadMadre: Number,
    embControlado: Boolean,
    estaMadre: {
      estable: Boolean,
      inestable: Boolean,
    },
    alimentacion: String,
    medicamentos: Boolean,
    traumatismo: Boolean,
    rayosX: Boolean,
    traumSang: Boolean,
    tiempoGest: Number,
    asistidoPor: String,
    tipoParto: String,
    hipoxia: Boolean,
    compliParto: String,
    estaNinoNacer: String,
    incubadora: String,
    incubTiempo: {
      cant: Number,
      week: Boolean,
      month: Boolean,
      day: Boolean,
    },
    malformac: String,
    tipoAliment: {
      b: Boolean,
      s: Boolean,
      m: Boolean,
    },
    hastaEdad: {
      years: Number,
      months: Number,
    },
    difSucc: String,
    duermeSolo: Boolean,
    luzParaDorm: Boolean,
    traumatismo2: String,
    enfPrecede: String,
  },
  desarrolloMotor: {
    sostCabeza: {
      years: Number,
      months: Number,
    },
    seSento: {
      years: Number,
      months: Number,
    },
    gateo: {
      years: Number,
      months: Number,
    },
    seParo: {
      years: Number,
      months: Number,
    },
    caminoSolo: {
      years: Number,
      months: Number,
    },
    otro: String,
  },
  desarrolloLeng: {
    sonrisa: {
      years: Number,
      months: Number,
    },
    gorjeo: {
      years: Number,
      months: Number,
    },
    balbuceo: {
      years: Number,
      months: Number,
    },
    laleo: {
      years: Number,
      months: Number,
    },
    primerasPalab: {
      years: Number,
      months: Number,
    },
    fracesDosPalab: {
      years: Number,
      months: Number,
    },
    oracionesCompl: {
      years: Number,
      months: Number,
    },
    compElNo: {
      years: Number,
      months: Number,
    },
  },
  comport: String,
  anamFamiliar: {
    enfPadre: String,
    enfMadre: String,
    famPatDisc: String,
    famMatDisc: String,
  },
  desPsicosocial: {
    viveCon: String,
    relPadres: String,
    relHermanos: String,
    relFamiliares: String,
    relAmigos: String,
  },
  diagnosticos: {
    medicosDurantEmb: String,
    medicosDespNac: String,
  },
  tratamiento: {
    tipAlim: {
      soli: Boolean,
      liq: Boolean,
    },
    tratRecib: String,
    terapAct: String,
    medicament: String,
  },
  recomends: String,
  observs: String,
  responsable: String,
  fechahora: Date,
  dificults: {
    masticar: Boolean,
    beber: Boolean,
    deglutir: Boolean,
  },
});

module.exports = mongoose.model('TLengMedicalCard', TLengMedicalCardSchema);

// const test = {
//   "idpaciente": "20000",
//   "consulta": {
//     "motivo": "String",
//     "remitio": "String",
//     "edadSintoms": {
//       "years": 2,
//       "months": 2
//     },
//     "tratAnt": true
//   },
//   "anamPersonal": {
//     "edadMadre": 2,
//     "embControlado": true,
//     "estaMadre": {
//       "estable": true,
//       "inestable": true
//     },
//     "alimentacion": "String",
//     "medicamentos": true,
//     "traumatismo": true,
//     "rayosX": true,
//     "traumSang": true,
//     "tiempoGest": 2,
//     "asistidoPor": "String",
//     "tipoParto": "String",
//     "hipoxia": true,
//     "compliParto": "String",
//     "estaNinoNacer": "String",
//     "incubadora": "String",
//     "incubTiempo": {
//       "cant": 2,
//       "week": true,
//       "month": true,
//       "day": true
//     },
//     "malformac": "String",
//     "tipoAliment": {
//       "b": true,
//       "s": true,
//       "m": true
//     },
//     "hastaEdad": {
//       "years": 2,
//       "months": 2
//     },
//     "difSucc": "String",
//     "duermeSolo": true,
//     "luzParaDorm": true,
//     "traumatismo2": "String",
//     "enfPrecede": "String"
//   },
//   "desarrolloMotor": {
//     "sostCabeza": {
//       "years": 2,
//       "months": 2
//     },
//     "seSento": {
//       "years": 2,
//       "months": 2
//     },
//     "gateo": {
//       "years": 2,
//       "months": 2
//     },
//     "seParo": {
//       "years": 2,
//       "months": 2
//     },
//     "caminoSolo": {
//       "years": 2,
//       "months": 2
//     },
//     "otro": "String"
//   },
//   "desarrolloLeng": {
//     "sonrisa": {
//       "years": 2,
//       "months": 2
//     },
//     "gorjeo": {
//       "years": 2,
//       "months": 2
//     },
//     "balbuceo": {
//       "years": 2,
//       "months": 2
//     },
//     "laleo": {
//       "years": 2,
//       "months": 2
//     },
//     "primerasPalab": {
//       "years": 2,
//       "months": 2
//     },
//     "fracesDosPalab": {
//       "years": 2,
//       "months": 2
//     },
//     "oracionesCompl": {
//       "years": 2,
//       "months": 2
//     },
//     "compElNo": {
//       "years": 2,
//       "months": 2
//     }
//   },
//   "comport": "String",
//   "anamFamiliar": {
//     "enfPadre": "String",
//     "enfMadre": "String",
//     "famPatDisc": "String",
//     "famMatDisc": "String"
//   },
//   "desPsicosocial": {
//     "viveCon": "String",
//     "relPadres": "String",
//     "relHermanos": "String",
//     "relFamiliares": "String",
//     "relAmigos": "String"
//   },
//   "diagnosticos": {
//     "medicosDurantEmb": "String",
//     "medicosDespNac": "String"
//   },
//   "tratamiento": {
//     "tipAlim": {
//       "soli": true,
//       "liq": true
//     },
//     "tratRecib": "String",
//     "terapAct": "String",
//     "medicament": "String"
//   },
//   "recomends": "String",
//   "observs": "String",
//   "responsable": "String",
//   "fechahora": "2019-02-07T10:00",
//   "dificults": {
//     "masticar": true,
//     "beber": true,
//     "deglutir": true
//   },
// };
