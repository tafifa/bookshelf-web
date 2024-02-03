const express = require("express");
const router = express.Router();

const { 
  getAllBooksController,
  getBookByIdController,
  postBookController,
  updateBookController,
  deleteBookController
} = require("../../controllers/BookshelfController");

router.get("/", getAllBooksController);
router.get("/:bookId", getBookByIdController);
router.post("/", postBookController);
router.patch("/:bookId", updateBookController);
router.delete("/:bookId", deleteBookController);

module.exports = router;
