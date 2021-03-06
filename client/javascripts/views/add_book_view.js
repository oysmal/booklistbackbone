var AddBookTemplate = require('../templates/add_book');
var Backbone = require('backbone');
var AddBookTemplate = require('../templates/add_book');
var Book = require('../models/book');
var $ = require('jquery');
var BookForm = require('../forms/add_book_form');

var BookView = Backbone.View.extend({
	template: AddBookTemplate,
	tagName: 'div',
	form: new BookForm({ model: new Book() }),
	initialize: function() {
	},
	render: function(options) {
		var book = new Book();
		this.$el.html(this.template());
		this.form.render();
		this.$('#form-container').append(this.form.el);
		return this;
	}
});

module.exports = BookView;