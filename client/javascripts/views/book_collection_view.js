var Book = require('../models/book');
var BookCollection = require('../models/book_collection');
var BookCollectionViewTemplate = require('../templates/booklist_collection_view');
var BookView = require('./book_view');
var BooklistItemView = require('./booklist_item_view');
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');


var BookCollectionView = Backbone.View.extend({
	tagName: 'div',
	template: BookCollectionViewTemplate,
	initialize: function() {
		this.collection.fetch();
		this.collection.sort();
		this.listenTo(this.collection, 'add', this.render);
  		this.listenTo(this.collection, 'reset', this.render);
  		this.listenTo(this.collection, 'remove', this.render);
	},
	render: function() {		
		this.$el.empty();
		this.$el.html(this.template());
		var self = this;
		this.collection.each(function(item) {
			var itemView = new BooklistItemView({model: item});
			itemView.render();
			self.$('#content-list').append(itemView.el);
		});
		return this;
	},
	events: {
		'click #search-submit': 'onSearchSubmit',
		'click #sort-rating-submit': 'onSortRating',
		'click #sort-title-submit': 'onSortTitle',
	},

	onSearchSubmit: function(event) {
		var list = [];
		_(this.collection.models).each(function(model) {
			var value = $('#search-query').val().toLowerCase();
			console.log(model.get('title'));
			if(model.get('title').toLowerCase().indexOf(value) != -1 || model.get('isbn').toLowerCase().indexOf(value) != -1) {
				list.push(model);
			}
		});
		this.collection.models = list;
		this.render();
	},

	onSortRating: function(event) {
		this.collection.comparator = function(item) {
			return -item.get('rating');
		};
		this.collection.sort();
		this.render();
	},

	onSortTitle: function(event) {
		this.collection.comparator = function(item) {
			return item.get('title');
		};
		this.collection.sort();
		this.render();
	}
});


module.exports = BookCollectionView;