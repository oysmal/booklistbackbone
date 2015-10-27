var Backbone = require('backbone');
var Book = require('../models/book');
var BooklistItemTemplate = require('../templates/booklist_item');
var BookView = require('./book_view');
var $ = require('jquery');

var BooklistItemView = Backbone.View.extend({
	tagName: 'li',
	template: BooklistItemTemplate,
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	render: function(options) {
		this.$el.html(this.template({book: this.model.toJSON()}));
		return this;
	},
	events: {
		'click li': 'onClickItem'
	},

	onClickItem: function(event) {
		event.preventDefault();
		console.log("Clicked " + this.model.get('title'));
		window.location = '/#view/' + this.model.get('title');
	}
});

module.exports = BooklistItemView;