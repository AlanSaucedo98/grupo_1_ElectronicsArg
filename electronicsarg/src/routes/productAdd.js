var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');

const controller = require('../controllers/productController');
const sessionUserCheck = require('../middlewares/sessionUserCheck');

let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public/images/products')
    },
    filename:(req,file,callback)=>{
        callback(null,file.fieldname + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage:storage})


router.get('/',sessionUserCheck, controller.index);
router.post('/',upload.any(),sessionUserCheck, controller.agregar);


router.put('/edit/:id',upload.any(),controller.actualizar);






/* Funcion que renderiza los detalles del producto. */

module.exports = router;