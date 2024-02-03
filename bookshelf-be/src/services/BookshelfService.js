const { v4: uuid } = require("uuid");

const bookshelf = require("../database/bookshelf");

const getAllBooksService = () => {
  const allBooks = bookshelf.getAllBooks();
  return allBooks;
};

const getBookByIdService = (bookId) => {
  const book = bookshelf.getBookById(bookId);
  return book;
};

const postBookService = (newBook) => {
  const bookToInsert = {
    ...newBook,
    id: uuid(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  bookshelf.postBook(bookToInsert);
};

const updateBookService = (changes, bookId) => {
  bookshelf.updateBook(changes, bookId);
};

const deleteBookService = (bookId) => {
  bookshelf.deleteBook(bookId);
};

module.exports = {
  getAllBooksService,
  getBookByIdService,
  postBookService,
  updateBookService,
  deleteBookService,
};
