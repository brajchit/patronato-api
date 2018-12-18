const express = require('express');
const createError = require('http-errors');
// const companyRouter = require('../api/company/company.router');
// const warehouseRouter = require('../api/warehouse/warehouse.router');
const categoryRouter = require('../api/category/category.router');
// const productRouter = require('../api/product/product.router');
// const movementRouter = require('../api/movement/movement.router');
const bsUserRouter = require('../api/bs_users/bsUser.router');
const medicalCardRouter = require('../api/medialcard/medicalcard.router');
// const movementInstanceRouter = require('../api/productInstance/productInstance.router');

const router = express.Router();


router.use('/categories', categoryRouter);

router.use('/bsusers', bsUserRouter);

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
