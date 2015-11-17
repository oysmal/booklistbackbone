var Backbone = require('backbone');

var Book = Backbone.Model.extend({
	idAttribute: '_id',
	urlRoot: '/book',
	defaults: {
		title: '',
		author: '',
		genre: '',
		rating: 1,
		isbn: ''
	}
});

module.exports = Book;