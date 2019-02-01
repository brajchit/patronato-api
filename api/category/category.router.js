const express = require('express');
const debug = require('debug')('api:api');

const router = express.Router();
const categoryController = require('./category.controller');

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
router.get('/', categoryController.list);

/*
 * GET
 */
router.get('/:id', categoryController.show);

/*
 * POST
 */
router.post('/', categoryController.create);

/*
 * PUT
 */
router.put('/:id', categoryController.update);

/*
 * DELETE
 */
router.delete('/:id', categoryController.remove);

module.exports = router;
