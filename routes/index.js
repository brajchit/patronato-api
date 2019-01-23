const express = require('express');
const createError = require('http-errors');
const categoryRouter = require('../api/category/category.router');
const medicalCardRouter = require('../api/medialcard/medicalcard.router');

const router = express.Router();

/**
 * Category API RESTful enpoints.
 */
router.use('/categories', categoryRouter);


/**
* Router handler to '/medicalcards'
*/
router.use('/medicalcards', medicalCardRouter);

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
