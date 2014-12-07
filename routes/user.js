var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user/', function(req, res) {
	res.send('respond with a resource');
});

router.get('/user/login', function(req, res) {
	  res.render('user/login');
});

router.post('/user/login', function(req, res) {
	
});
router.get('/user/logout', function(req, res) {
	res.send('respond with a resource');
});

module.exports = router;
