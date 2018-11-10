var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var facturacionRouter = require('./routes/facturacion');
var inventarioRouter = require('./routes/inventario');
var cuentaCorrienteRouter = require('./routes/cuentaCorriente');
var ingresosRouter = require('./routes/ingresos');
var proveedoresRouter = require('./routes/Proveedores');
var clientesMoraRouter = require('./routes/clientesMora');
var saldosRouter = require('./routes/saldos');
var cargosRouter = require('./routes/cargos');
var abonosRouter = require('./routes/abonos');
var pagarRouter = require('./routes/pagar');
var facturasRouter = require('./routes/facturas');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/facturacion', facturacionRouter);
app.use('/inventario', inventarioRouter);
app.use('/cuentaCorriente', cuentaCorrienteRouter);
app.use('/ingresos', ingresosRouter);
app.use('/Proveedores', proveedoresRouter);
app.use('/clientesMora', clientesMoraRouter);
app.use('/saldos', saldosRouter);
app.use('/cargos', cargosRouter);
app.use('/abonos', abonosRouter);
app.use('/pagar', pagarRouter);
app.use('/facturas', facturasRouter);

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
