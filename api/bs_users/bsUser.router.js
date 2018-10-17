const express = require('express');
const debug = require('debug')('aqs:api');

const router = express.Router();
const WarehouseController = require('./bsUser.controller');

/*
 * MIDDLEWARE
 */
router.use((req, res, next) => {
  const query = {};

  if (req.query.where) query.where = JSON.parse(req.query.where);

  if (req.query.fields) query.fields = JSON.parse(req.query.fields);

  if (req.query.sort) query.sort = { sort: JSON.parse(req.query.sort) };
  else query.sort = {};

  if (req.query.limit) query.sort.limit = Number.parseInt(req.query.limit, 10);

  if (req.query.skip) query.sort.skip = Number.parseInt(req.query.skip, 10);

  req.query = query;

  debug('query: %O', req.query);
  next();
});

/*
 * GET
 */
router.get('/', WarehouseController.list);

/*
 * GET
 */
router.get('/:id', WarehouseController.show);

/*
 * POST
 */
router.post('/', WarehouseController.create);

module.exports = router;
