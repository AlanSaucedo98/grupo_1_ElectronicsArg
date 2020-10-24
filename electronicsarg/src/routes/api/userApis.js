const express = require('express');
const router = express.Router();

const userControllerApi = require('../../controllers/userControllerApi')

/* GET home page. */

router.get('/all/user', userControllerApi.all)

module.exports = router;