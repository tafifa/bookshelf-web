const { v4: uuid } = require("uuid");

const users = require("../utilities/user");

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
    name: body.name,
    email: body.email,
    password: body.password,
    books: body.books,
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
