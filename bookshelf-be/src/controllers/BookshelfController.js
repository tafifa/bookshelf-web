const {
  getAllBooksService,
  getBookByIdService,
  postBookService,
  updateBookService,
  deleteBookService
} =  require("../services/BookshelfService");

const getAllBooksController = (req, res) => {
  const allBooks = getAllBooksService();
  res.status(201).send({ status: "OK", data: allBooks });
};

const getBookByIdController = (req, res) => {
  const {
    params: { bookId }
  } = req;

  if (!bookId) {
    return res.status(400).send("There is no Id given");
  }

  const book = getBookByIdService(bookId);
  res.status(201).send({ status: "OK", data: book });
};

const postBookController = (req, res) => {
  const { body } = req;

  if (Object.keys(req.body).length === 0) {
    return res.status(400).send("There is no book");
  }

  const newBook = {
    title: body.title,
    author: body.author,
    genre: body.genre,
    description: body.description,
    publishedYear: body.publishedYear,
  }

  postBookService(newBook);
  res.status(201).send({status: "OK", message:"Book has been Created"});
};

const updateBookController = (req, res) => {
  const { 
    body,
    params: { bookId }
  } = req;

  if (Object.keys(req.body).length === 0) {
    return res.status(400).send("There is no book");
  }
  if (!bookId) {
    return res.status(400).send("There is no Id given");
  }

  updateBookService(body, bookId);
  res.status(201).send({status: "OK", message: "Book has been updated"});
};

const deleteBookController = (req, res) => {
  const {
    params: { bookId }
  } = req;

  if (!bookId) {
    return res.status(400).send("There is no Id given");
  }

  deleteBookService(bookId);
  res.status(201).send({status: "OK", message: "Book has been deleted"});
};

module.exports = {
  getAllBooksController,
  getBookByIdController,
  postBookController,
  updateBookController,
  deleteBookController
};
