var Backbone = require('backbone');
var Book = require('../models/book');
var $ = require('jquery');
var BookFormTemplate = require('../templates/book_form');
var BackboneForms = require('backbone-forms');
Backbone.$ = $;

var BookForm = Backbone.Form.extend({
	template: BookFormTemplate,

	schema: {
		title: {type: 'Text'},
		author: {type: 'Text'},
		genre: {type: 'Text'},
		rating: {type: 'Text'},
		isbn: {type: 'Text'},
	},

	events: {
		'click #add-book-button': function(e) {
			e.preventDefault();
			console.log("saved book");
			console.log(this.model);
		}
	}
})

module.exports = BookForm;