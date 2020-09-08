
// ======> MODULOS <======= //
var express = require('express');
var router = express.Router();

const controller = require('../controllers/mainController');


// ======> MIDDLEWARES <======= //

const cookieCheck = require('../middlewares/cookieCheck');


// ======> RUTAS <======= //
router.get('/',cookieCheck, controller.index);





/* Funcion que renderiza los detalles del producto. */

module.exports = router;
