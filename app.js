var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = require('./routes')

const SECRET = process.env.SECRET || "mySe0re!t"

var app = express();

const authenticator = (req, res, next) => {
  var { authorization } = req.headers
  console.log(req.headers, authorization)
  if (authorization && authorization == SECRET) return next()
  return res.status(403).json({ error: "Unauthorized" })

}

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(authenticator)
app.use('/', router);

// catch 404 and forward to error handler


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.status(500).json({ error: "Server crashed" });
});


module.exports = app;
