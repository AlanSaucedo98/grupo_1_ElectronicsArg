var express = require('express');
var router = express.Router();

var controller = require('../controllers/productController')

 /* Funcion que renderiza Al formulario de registro. */
router.get('/', controller.index);
router.post('/', controller.agregar)

module.exports = router;