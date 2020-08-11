var express = require('express');
var router = express.Router();

 /* Funcion que renderiza Al formulario de registro. */
router.get('/', function(req, res, next) {
  res.render('productAdd', { title: 'Formulario de Registro' });
});

module.exports = router;