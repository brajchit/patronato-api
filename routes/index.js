const express = require('express');
const createError = require('http-errors');
const companyRouter = require('./company.router');

const router = express.Router();

/**
 * Router handler to '/companies'
 */
router.use('/companies', companyRouter);

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Aquasolutions API RESTful' });
});

/* GET custon error to error hendler in app.js */
router.get('/err', (req, res, next) => {
  const err = new Error('a native error example');

  // next(createError(501, 'my custom message'));
  return next(createError(501, err, { expose: false }));
});

module.exports = router;
