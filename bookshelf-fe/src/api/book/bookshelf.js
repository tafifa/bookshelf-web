import { v4 as uuid } from "uuid";
import DB from "./db.json";

const bookUtilities = {
  postBook: (data) => {
    const newBook = {
      title: data.title,
      author: data.author,
      genre: data.genre,
      description: data.description,
      publishedYear: data.publishedYear,
    };
  
    const bookToInsert = {
      ...newBook,
      id: uuid(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  
    const bookIndex = DB.books.findIndex((book) => book.title === bookToInsert.title) > -1;
  
    if (bookIndex) {
      console.log("Book already exists");
      return null; // or throw new Error("Book already exists");
    }
  
    // If the book doesn't exist, add it to the database
    DB.books.push(bookToInsert);
    console.log(DB);
  },
  
  getBookByTittle: (booktitle) => {
    const book = DB.books.find((book) => book.title === booktitle);
    if (!book) {
      return null;
    }
    return book;
  },
};

export default bookUtilities;
