const DB = require("./books.json");
const { saveToDatabase } = require("./utils");

const getAllBooks = () => {
  return DB.books;
};

const getBookById = (bookId) => {
  const book = DB.books.find((book) => book.id === bookId);
  if (!book) {
    return null;
  }
  return book;
};

const postBook = (newBook) => {
  const bookIndex = DB.books.findIndex((book) => book.title === newBook.title) > -1;

  if (bookIndex) {
    console.log("Book already exists");
    return null; // or throw new Error("Book already exists");
  }

  // If the book doesn't exist, add it to the database
  DB.books.push(newBook);
  saveToDatabase(DB);
  return newBook;
};

const updateBook = (changes, bookId) => {
  const bookIndex = DB.books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    console.log("Book isn't exists");
    return null; // or throw new Error("Book already exists");
  };
  const updatedBook = {
    ...DB.books[bookIndex],
    ...changes,
    updatedAt: new Date().toISOString()
  };
  DB.books[bookIndex] = updatedBook;
  saveToDatabase(DB);
}

const deleteBook = (bookId) => {
  const bookIndex = DB.books.findIndex((book) => book.id === bookId);

  console.log(bookIndex)

  if (bookIndex === -1) {
    console.log("Book isn't exists");
    return null; // or throw new Error("Book already exists");
  };

  DB.books.splice(bookIndex, 1);
  saveToDatabase(DB);
}

module.exports = { 
  getAllBooks,
  getBookById,
  postBook,
  updateBook,
  deleteBook
};
