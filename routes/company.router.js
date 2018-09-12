const express = require('express');
const chalk = require('chalk');

const router = express.Router();
const CompanyController = require('../controllers/company.controller.js');

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

  console.log('req query: ', chalk.blue(JSON.stringify(query)));
  next();
});

/*
 * GET
 */
router.get('/', CompanyController.list);

/*
 * GET
 */
router.get('/:id', CompanyController.show);

/*
 * POST
 */
router.post('/', CompanyController.create);

/*
 * PUT
 */
router.put('/:id', CompanyController.update);

/*
 * DELETE
 */
router.delete('/:id', CompanyController.remove);

module.exports = router;
