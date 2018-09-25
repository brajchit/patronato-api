const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const debug = require('debug')('aqs');
const error = require('debug')('aqs:error');

const indexRouter = require('./routes/index');
const config = require('./config');

const app = express();

/**
 * useNewUrlParser is required to latest versions of mongoose
 */
mongoose.connect(config.mongoUri, { useNewUrlParser: true })
  .then(() => {
    debug(`mongodb connected: ${config.mongoUri}!`);
  }).catch((err) => {
    error(`error connecting db: ${config.mongoUri}`);
    error(`error : ${err}`);
  });

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

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
