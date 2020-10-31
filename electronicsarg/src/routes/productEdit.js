var express = require('express');
var router = express.Router();

const controller = require('../controllers/productController');
const sessionUserCheck = require('../middlewares/sessionUserCheck');
const multerProduct = require('../middlewares/multerProduct');

router.get('/:id',sessionUserCheck , controller.editar);
router.put('/:id',multerProduct.any(),sessionUserCheck, controller.actualizar);


module.exports = router;