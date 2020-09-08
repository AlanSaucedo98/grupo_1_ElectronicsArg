var express = require('express');
var router = express.Router();

const controller = require('../controllers/mainController');

/* Funcion que renderiza el Home. */
router.get('/', controller.index);





/* Funcion que renderiza los detalles del producto. */

module.exports = router;
