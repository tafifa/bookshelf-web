const { v4: uuid } = require("uuid");

const users = require("../models/user/user");

const getAllUsersService = () => {
  const allUsers = users.getAllUsers();
  return allUsers;
};

const getUserByIdService = (userId) => {
  const user = users.getUserById(userId);
  return user;
};

const postUserService = (body) => {
  const newUser = {
    title: body.title,
    author: body.author,
    genre: body.genre,
    description: body.description,
    publishedYear: body.publishedYear,
  }

  const userToInsert = {
    ...newUser,
    id: uuid(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  users.postUser(userToInsert);
};

const updateUserService = (changes, userId) => {
  users.updateUser(changes, userId);
};

const deleteUserService = (userId) => {
  users.deleteUser(userId);
};

module.exports = {
  getAllUsersService,
  getUserByIdService,
  postUserService,
  updateUserService,
  deleteUserService,
};
