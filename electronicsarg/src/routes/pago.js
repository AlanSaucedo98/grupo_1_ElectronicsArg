var express = require('express');
var router = express.Router();
const multer = require('multer');

const controller = require('../controllers/pagoController') //requiero el controlador que se hará cargo de la lógica
const path =require("path");



const sessionUserCheck = require('../middlewares/sessionUserCheck');

  router.get('/',controller.pagar);
  
  
  


module.exports = router;