var Backbone = require('backbone');

var Book = Backbone.Model.extend({
	defaults: {
		title: '',
		author: '',
		genre: '',
		rating: 0,
		isbn: ''
	}
});

module.exports = Book;