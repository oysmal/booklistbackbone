var Book = require('../models/book');
var BookCollection = require('../models/book_collection');
var BookView = require('./book_view');
var BooklistItemView = require('./booklist_item_view');
var Backbone = require('backbone');

var BookCollectionView = Backbone.View.extend({
	tagName: 'ul',
	initialize: function() {
		this.listenTo(this.collection, 'change', this.render);
	},
	render: function() {
		var self = this;
		this.collection.each(function(item) {
			var itemView = new BooklistItemView({model: item});
			itemView.render();
			self.$el.append(itemView.el);
		});
		return this;
	}
});


module.exports = BookCollectionView;