var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/index.html');
});


router.post('/book', function(req, res, next) {
	var book = req.body.book || null;
	
	if(!book) {
		res.status(400).json({'msg': 'No book object sent'});
	}

	

})

module.exports = router;
