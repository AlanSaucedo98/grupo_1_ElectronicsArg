var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');

const controller = require('../controllers/productController');
const sessionUserCheck = require('../middlewares/sessionUserCheck');

const upImagesProducts = require('../middlewares/upImagesProducts'); //requiero el modulo que se encarga de guardar las imagenes, vía multer



router.get('/',sessionUserCheck, controller.index);
router.post('/',upImagesProducts.any(),sessionUserCheck, controller.agregar);


router.put('/edit/:id',upImagesProducts.any(),controller.actualizar);






/* Funcion que renderiza los detalles del producto. */

module.exports = router;