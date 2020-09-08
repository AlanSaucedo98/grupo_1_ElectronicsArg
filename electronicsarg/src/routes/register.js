var express = require('express');
var router = express.Router();

var controller = require('../controllers/registerController')

router.get('/', controller.index);
router.post('/', controller.crear);
module.exports = router;
