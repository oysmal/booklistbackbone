var Backbone = require('backbone');
var Book = require('../models/book');
var BooklistItemTemplate = require('../templates/booklist_item');
var BookView = require('./book_view');
var $ = require('jquery');

var BooklistItemView = Backbone.View.extend({
	tagName: 'div',
	template: BooklistItemTemplate,
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	render: function(options) {
		this.$el.html(this.template({book: this.model.toJSON()}));
		// Toggle off rate view.
		this.$('.togglediv').toggle(false);
		return this;
	},
	events: {
		'click .book-info': 'onClickItem',
		'click button.toggle': 'onToggleRate',
		'click button.rate': 'onClickRate',
		'click button.delete': 'onClickDelete'
	},

	onClickItem: function(event) {
		event.preventDefault();
		window.location = '/#view/' + this.model.get('title');
	},

	onToggleRate: function(event) {
		event.preventDefault();
		$(event.currentTarget).parent().next().toggle();
	},

	onClickRate: function(event) {
		event.preventDefault();
		var rating = this.$('.rate_value').val();
		this.model.set({rating:rating});
		this.model.save();
	},

	onClickDelete: function(event) {
		this.model.destroy();
	}
});

module.exports = BooklistItemView;