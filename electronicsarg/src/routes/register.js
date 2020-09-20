var express = require('express');
var router = express.Router();

var controller = require('../controllers/usersControllers')

let registerValidator = require('../validators/registerValidator');
let loginValidator = require('../validators/loginValidator');

const multerAvatar = require('../middlewares/multerAvatar');

router.get('/', controller.register);
router.post('/',multerAvatar.any(),registerValidator, controller.processRegister);
module.exports = router;
