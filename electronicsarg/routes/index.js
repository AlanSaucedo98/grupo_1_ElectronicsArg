var express = require('express');
var router = express.Router();

const controller = require('../controllers/mainController');

/* Funcion que renderiza el Home. */
router.get('/', controller.index);



/* Funcion que renderiza los detalles del producto. */
router.get('/detalles', function(req, res, next) {
  res.render('productDetail', { title: 'Detalles del Producto' });
});

module.exports = router;
