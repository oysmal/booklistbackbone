var Backbone = require('backbone');
var Book = require('../models/book');
var BookCollection = require('../models/book_collection');
var $ = require('jquery');
var BookFormTemplate = require('../templates/book_form');
var BackboneForms = require('backbone-forms');
Backbone.$ = $;

var BookForm = Backbone.Form.extend({
	template: BookFormTemplate,

	schema: {
		title: {type: 'Text', editorClass: 'form-control'},
		author: {type: 'Text', editorClass: 'form-control'},
		genre: {type: 'Text', editorClass: 'form-control'},
		isbn: {type: 'Text', editorClass: 'form-control'}
	},
	submitButton: 'Submit',

	events: {
		'click #add-book-button': 'onAddBookClick'
	},

	onAddBookClick: function(e) {
		e.preventDefault();
		this.commit(); 
		this.model.save();
		window.location = '/';
	}
})

module.exports = BookForm;