const express = require('express');
const debug = require('debug')('api');

const router = express.Router();
const psicoMedicalcardController = require('./psicoMedicalcard.controller');

/*
 * MIDDLEWARE
 */
router.use((req, res, next) => {
  const query = {};

  if (req.query.where) query.where = req.query.where;

  if (req.query.fields) query.fields = req.query.fields;

  if (req.query.sort) query.sort = { sort: req.query.sort };
  else query.sort = {};

  if (req.query.limit) query.sort.limit = Number.parseInt(req.query.limit, 10);

  if (req.query.skip) query.sort.skip = Number.parseInt(req.query.skip, 10);

  req.query = query;

  debug('req.query: %O', req.query);
  next();
});

/*
 * GET
 */
router.get('/', psicoMedicalcardController.list);

/*
 * GET
 */
router.get('/:id', psicoMedicalcardController.show);

/*
 * POST
 */
router.post('/', psicoMedicalcardController.create);

/*
 * PUT
 */
router.put('/:id', psicoMedicalcardController.update);

/*
 * DELETE
 */
router.delete('/:id', psicoMedicalcardController.remove);

module.exports = router;
