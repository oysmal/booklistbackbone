var Book = require('../models/book');
var BookCollection = require('../models/book_collection');
var BookView = require('./book_view');
var BooklistItemView = require('./booklist_item_view');
var Backbone = require('backbone');

var BookCollectionView = Backbone.View.extend({
	tagName: 'div',
	initialize: function() {
		this.collection.fetch();
		this.listenTo(this.collection, 'add', this.render);
  		this.listenTo(this.collection, 'reset', this.render);
  		this.listenTo(this.collection, 'remove', this.render);
  		var self = this;
  		setInterval(function() {
  			self.collection.fetch();
  		}, 5000);
	},
	render: function() {
		this.$el.empty();
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