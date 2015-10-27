var Book = require('./models/book');
var BookCollection = require('./models/book_collection');
var BookView = require('./views/book_view');
var BookCollectionView = require('./views/book_collection_view');
var $ = require('jquery');

var book1 = new Book({
	title: 'The Lord Of The Rings',
	author: 'J.R.R Tolkien',
	genre: 'Fantasy',
	rating: 5,
	isbn: '192-543545-45-12'
});

var book2 = new Book({
	title: 'Harry Potter and the Philosophers Stone',
	author: 'J.K Rowling',
	genre: 'Fantasy',
	rating: 4,
	isbn: '12-3-545-45-12'
});

var book3 = new Book({
	title: 'Magician',
	author: 'Raymon E. Feist',
	genre: 'Fantasy',
	rating: 5,
	isbn: '455-43545-45-12'
});

var bookCollection = new BookCollection();
bookCollection.add(book1);
bookCollection.add(book2);
bookCollection.add(book3);

module.exports = bookCollection;