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


router.get('/:id',/*sessionUserCheck ,*/ controller.editar);
router.put('/:id',upload.any(),/*sessionUserCheck,*/ controller.actualizar);


module.exports = router;