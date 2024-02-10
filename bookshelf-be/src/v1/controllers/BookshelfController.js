const {
  getAllBooksService,
  getBookByIdService,
  postBookService,
  updateBookService,
  deleteBookService
} =  require("../services/BookshelfService");

const getAllBooksController = (req, res) => {
  const allBooks = getAllBooksService();
  res.status(201).send({ status: "Success", message:"Books found", data: allBooks });
};

const getBookByIdController = (req, res) => {
  const {
    params: { bookId }
  } = req;

  if (!bookId) {
    return res.status(400).send("There is no Id given");
  }

  const book = getBookByIdService(bookId);

  if (book === null) {
    return res.status(404).send({status: "Error", message:"There is no book"});
  }

  res.status(201).send({ status: "Success", data: book });
};

const postBookController = (req, res) => {
  const { body } = req;

  if (Object.keys(body).length === 0) {
    return res.status(400).send({status: "Error", message:"There is no book"});
  }

  postBookService(body);
  res.status(201).send({status: "Success", message:"Book has been Created"});
};

const updateBookController = (req, res) => {
  const { 
    body,
    params: { bookId }
  } = req;

  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({status: "Error", message:"There is no changes given"});
  }
  if (!bookId) {
    return res.status(400).send({status: "Error", message:"There is no id given"});
  }

  updateBookService(body, bookId);
  res.status(201).send({status: "Success", message: "Book has been updated"});
};

const deleteBookController = (req, res) => {
  const {
    params: { bookId }
  } = req;

  if (!bookId) {
    return res.status(400).send({status: "Error", message:"There is no id given"});
  }

  deleteBookService(bookId);
  res.status(201).send({status: "Success", message: "Book has been deleted"});
};

module.exports = {
  getAllBooksController,
  getBookByIdController,
  postBookController,
  updateBookController,
  deleteBookController
};
