var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlMovie= require('../controllers/movie');


/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/list', ctrlMovie.listdisplay);
router.get('/about', ctrlMovie.about);

module.exports = router;
