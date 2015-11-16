var express = require('express');
var router = express.Router();
var Book = require('../models/book');

router.get('/', function(req, res, next) {
	Book.findAll(function(err, data) {
		if(err) {
			return res.status(500).json({msg: err});
		} else {
			return res.status(200).json(data);
		}
	});
});

router.get('/:title', function(req, res, next) {
	var title = req.params.title;
	if(title) {
		Book.findByTitle(title, function(err, data) {
			if(err) {
				return res.status(500).json({msg: err});
			} else {
				return res.status(200).json(data);
			}
		});
	} else {
		return res.status(400).json({msg: 'You need to specify a title'});
	}
});

router.post('/', function(req, res, next) {
	console.log('test');
	var book = req.body;
	console.log(book);
	if(!book) {
		return res.status(400).json({msg: 'You need to post a book object!'});
	} else {
		Book.addBook(book, function(err, data) {
			if(err) {
				return res.status(400).json({msg: err});
			} else {
				return res.status(204).json({msg: data});
			}
		});
	}
});

module.exports = router;