var express = require('express');
var router = express.Router();
const multer = require('multer');

const controller = require('../controllers/productController') //requiero el controlador que se hará cargo de la lógica
const path =require("path");

let storage = multer.diskStorage({
  destination:(req,file,callback)=>{
      callback(null,'public/images/products')
  },
  filename:(req,file,callback)=>{
      callback(null,file.fieldname + Date.now() + path.extname(file.originalname))
  }
})

let upload = multer({storage:storage})
  
router.get('/:id', controller.detalle)






module.exports = router;