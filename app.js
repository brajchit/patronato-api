const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const chalk = require('chalk');
const mongoose = require('mongoose');
const debug = require('debug')('aquasolutions-rest-api:server');

const indexRouter = require('./routes/index');
const config = require('./config');

const app = express();

/**
 * useNewUrlParser is required to latest versions of mongoose
 */
mongoose.connect(config.mongoUri, { useNewUrlParser: true })
  .then(() => console.log(chalk.green(`mongodb connected: ${config.mongoUri}!`)))
  .catch((err) => {
    console.error(chalk.red(`error connecting db: ${config.mongoUri}`));
    console.error(chalk.red(`error : ${err}`));
    debug(`error : ${err}`);
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');

  res.json({
    status: err.status,
    message: err.message,
    error: res.locals.error.stack,
  });
  next();
});

module.exports = app;
