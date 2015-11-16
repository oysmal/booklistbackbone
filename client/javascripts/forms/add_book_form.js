var Backbone = require('backbone');
var Book = require('../models/book');
var BookCollection = require('../models/book_collection');
var $ = require('jquery');
var BookFormTemplate = require('../templates/book_form');
var BackboneForms = require('backbone-forms');
Backbone.$ = $;

var BookForm = Backbone.Form.extend({
	template: BookFormTemplate,

	/*initialize: function() {
		this.model = new Book();
	},*/

	schema: {
		title: {type: 'Text'},
		author: {type: 'Text'},
		genre: {type: 'Text'},
		isbn: {type: 'Text'}
	},

	submitButton: 'Submit',

	events: {
		'click #add-book-button': 'onAddBookClick'
	},

	onAddBookClick: function(e) {
		e.preventDefault();
		console.log(this.getValue());
		this.commit();
		console.log(this.model);
		this.model.save();
	}
})

module.exports = BookForm;