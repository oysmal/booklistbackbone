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
		return this;
	},
	events: {
		'click .title': 'onClickItem',
		'click button.toggle': 'onToggleRate',
		'click button.rate': 'onClickRate'
	},

	onClickItem: function(event) {
		event.preventDefault();
		window.location = '/#view/' + this.model.get('title');
	},

	onToggleRate: function(event) {
		event.preventDefault();
		console.log('Clicked toggle');
		console.log($(event.currentTarget).parent().next());
		$(event.currentTarget).parent().next().toggle();
	},

	onClickRate: function(event) {
		event.preventDefault();
		var rating = $(event.currentTarget).siblings('.rate_value').val();
		this.model.set({rating:rating});
		this.model.save();
	}
});

module.exports = BooklistItemView;