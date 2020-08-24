var express = require('express');
var router = express.Router();

const controller = require('../controllers/productController') //requiero el controlador que se hará cargo de la lógica
const path =require("path");


  
  router.get('/', controller.detalle)



module.exports = router;