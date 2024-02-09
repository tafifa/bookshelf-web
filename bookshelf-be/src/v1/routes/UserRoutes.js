const express = require("express");
const router = express.Router();

const { 
  getAllUsersController,
  getUserByIdController,
  postUserController,
  updateUserController,
  deleteUserController
} = require("../controllers/UserController");

router.get("/", getAllUsersController);
router.get("/:userId", getUserByIdController);
router.post("/", postUserController);
router.patch("/:userId", updateUserController);
router.delete("/:userId", deleteUserController);

module.exports = router;
