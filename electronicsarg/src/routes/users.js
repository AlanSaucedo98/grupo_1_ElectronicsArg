// ======> MODULOS <======= //


var express = require('express');
var router = express.Router();

// ======> CONTROLADORES <======= //

let controller = require('../controllers/usersControllers');

// ======> VALIDACIONES <======= //

let registerValidator = require('../validators/registerValidator');
let loginValidator = require('../validators/loginValidator');

// ======> MIDDLEWARES <======= //

const multerAvatar = require('../middlewares/multerAvatar');

// ======> RUTAS <======= //

router.get('/register',controller.register);
router.post('/register',multerAvatar.any(),registerValidator, controller.processRegister);

router.get('/login',controller.login);
router.post('/login',loginValidator, controller.processLogin);

router.get('/profile', controller.profile);

router.get('/logout',controller.logout);

module.exports = router;