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

router.get('/:book_id', function(req, res, next) {
	var id = req.params.book_id;
	Book.findById(id, function(err, data) {
		if(err) {
			return res.status(400).json({msg: err});
		} else {
			return res.status(200).json(data);
		}
	});
	return res.status(400).json({msg: 'You need to specify a title'});
});

router.post('/', function(req, res, next) {
	var book = req.body;
	if(!book) {
		return res.status(400).json({msg: 'You need to post a book object!'});
	} else {
		Book.addBook(book, function(err, data) {
			if(err) {
				return res.status(400).json({msg: err});
			} else {
				return res.status(201).json({msg: data});
			}
		});
	}
});

router.delete('/:book_id', function(req, res, next) {
	var id = req.params.book_id;
	Book.removeBook(id, function(err, data) {
		if(err) {
			return res.status(400).json({msg: err});
		} else {
			return res.status(200).json({msg: data});
		}
	});
});

router.put('/:book_id', function(req, res, next) {
	var book = req.body;
	var id = req.params.book_id;
	if(!book) {
		return res.status(400).json({msg: 'You need to PUT a book object!'});
	} else {
		Book.updateBook(id, book, function(err, data) {
			if(err) {
				return res.status(400).json({msg: err});
			} else {
				return res.status(200).json({msg: data});
			}
		});
	}
});

module.exports = router;