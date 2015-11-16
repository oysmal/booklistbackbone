var mongoose = require('mongoose');

var Book = new mongoose.Schema({
	title: {type: String, unique: true},
	genre: String,
	author: String,
	rating: Number,
	isbn: {type: String, unique: true}
});

Book.statics.findAll = function(callback) {
	this.find({}, function(err, data) {
		if(err) {
			return callback(err, null);
		} else {
			return callback(null, data);
		}
	});
};

Book.statics.findByTitle = function(title, callback) {
	this.findOne({title: title}, function(err, data) {
		if(err) {
			return callback(err, null);
		} else {
			return callback(null, data);
		}
	});
};

var BookModel = mongoose.model('Book', Book);

BookModel.addBook = function(book, callback) {
	var b = new BookModel(book);
	b.save(function(err, data) {
		if(err) {
			callback(err, null);
		} else {
			callback(null, data);
		}
	});
};

module.exports = BookModel;