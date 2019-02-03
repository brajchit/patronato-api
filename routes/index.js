const express = require('express');
const createError = require('http-errors');
const categoryRouter = require('../api/category/category.router');
const medicalCardRouter = require('../api/medialcard/medicalcard.router');
const tfisicaMedicalCardRouter = require('../api/tfisica_medialcard/tfisicaMedicalcard.router');
const psicoMedicalCardRouter = require('../api/psico_medialcard/psicoMedicalcard.router');
const cieRouter = require('../api/cie/cie.router');

const router = express.Router();

/**
 * Category API RESTful enpoints.
 */
router.use('/categories', categoryRouter);


/**
* Router handler to '/medicalcards'
*/
router.use('/medicalcards', medicalCardRouter);

/**
* Router handler to '/tfisicamedicalcards'
*/
router.use('/tfisicamedicalcards', tfisicaMedicalCardRouter);

/**
* Router handler to '/psicomedicalcards'
*/
router.use('/psicomedicalcards', psicoMedicalCardRouter);

/**
* Router handler to '/cies'
*/
router.use('/cies', cieRouter);

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Patronato API RESTful' });
});

/* GET custon error to error hendler in app.js */
router.get('/err', (req, res, next) => {
  const err = new Error('a native error example');

  // next(createError(501, 'my custom message'));
  return next(createError(501, err, { expose: false }));
});

module.exports = router;
