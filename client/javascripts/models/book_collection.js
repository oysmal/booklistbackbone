var Backbone = require('backbone');
var Book = require('./book');

var BookCollection = Backbone.Collection.extend({
	model: Book,
	url: '/book',
	initialize: function() {
		this.fetch();
	}
});

module.exports = BookCollection;