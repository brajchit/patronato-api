const express = require('express');
// const chalk = require('chalk');
const debug = require('debug')('api');

const router = express.Router();
const cieController = require('./cie.controller');

/*
 * MIDDLEWARE
 */
router.use((req, res, next) => {
  const query = {};

  // if (req.query.where) query.where = JSON.parse(req.query.where);

  if (req.query.fields) query.fields = JSON.parse(req.query.fields);

  if (req.query.sort) query.sort = { sort: JSON.parse(req.query.sort) };
  else query.sort = {};

  if (req.query.limit) query.sort.limit = Number.parseInt(req.query.limit, 10);

  if (req.query.skip) query.sort.skip = Number.parseInt(req.query.skip, 10);

  // console.log('req query: ', chalk.blue(JSON.stringify(query)));
  debug('query: %O', req.query);
  next();
});

/*
 * GET
 */
router.get('/', cieController.list);

/*
 * GET
 */
router.get('/:id', cieController.show);

/*
 * POST
 */
router.post('/', cieController.create);

/*
 * PUT
 */
router.put('/:id', cieController.update);

/*
 * DELETE
 */
router.delete('/:id', cieController.remove);

module.exports = router;
