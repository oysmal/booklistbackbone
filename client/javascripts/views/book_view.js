var Backbone = require('backbone');
var Book = require('../models/book');
var BookTemplate = require('../templates/book');

var BookView = Backbone.View.extend({
	template: BookTemplate,
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	render: function(options) {
		this.$el.html(this.template({book: this.model.toJSON()}));
		return this;
	},
	events: {
		'click #remove-book':'onClickRemove'
	},

	onClickRemove: function(event) {
		this.model.destroy();
		window.location.replace = '/';
	}
});

module.exports = BookView;