var Backbone = require('backbone');
var Book = require('./book');

var BookCollection = Backbone.Collection.extend( {
	model: Book
});

module.exports = BookCollection;