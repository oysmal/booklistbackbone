var dummy = require('./mock-collections');
var BookCollectionView = require('./views/book_collection_view');
var BookCollection = require('./models/book_collection');
var BookView = require('./views/book_view');
var AddBookView = require('./views/add_book_view');
var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var BackboneForms = require('backbone-forms');
Backbone.$ = $;

var collection = new BookCollection();

var BookRouter = Backbone.Router.extend({
	routes: {
		'booklist': 'booklist',
		'view/:isbn': 'viewBook',
		'add': 'addBook'
	},

	booklist: function() {
		$('#container').html(new BookCollectionView({collection: collection}).render().el);
	},

	viewBook: function(title) {
		var selectedBook = _(collection.models).find(function(book) {
			return book.get('title') === title;
		});
		
		$('#container').html(new BookView({model: selectedBook}).render().el);
	},

	addBook: function() {
		$('#container').html(new AddBookView().render().el);
	}
});






window.onload = function() {
	var router = new BookRouter();
	Backbone.history.start();
	router.navigate('booklist', {trigger: true});
};
