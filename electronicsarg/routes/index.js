var express = require('express');
var router = express.Router();

/* Funcion que renderiza el Home. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ElectronicsArg' });
});
/* Funcion que renderiza los detalles del producto. */
router.get('/detalles', function(req, res, next) {
  res.render('productDetail', { title: 'Detalles del Producto' });
});

module.exports = router;
