var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var productAddRouter = require('./routes/productAdd');
var usersRouter = require('./routes/users');

var productCartRouter = require("./routes/productCart");
var productAddRouter = require("./routes/productAdd");
var productRouter = require("./routes/product");
var registerRouter = require("./routes/register");
const editRouter = require("./routes/productEdit")


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use("/detalles",productRouter)
app.use('/registrarse', registerRouter)
app.use('/create', productAddRouter)
app.use('/users', usersRouter);
app.use("/carrodecompras", productCartRouter)
app.use("/editar",editRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
