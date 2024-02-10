const DB = require("../models/db.json");
const { saveToDatabase } = require("../models/db");

const getAllUsers = () => {
  return DB.users;
};

const getUserById = (userId) => {
  const user = DB.users.find((user) => user.id === userId);
  if (!user) {
    return null;
  }
  return user;
};

const postUser = (newUser) => {
  const userIndex = DB.users.findIndex((user) => user.name === newUser.name) > -1;

  if (userIndex) {
    console.log("User already exists");
    return null; // or throw new Error("User already exists");
  }

  // If the user doesn't exist, add it to the database
  DB.users.push(newUser);
  saveToDatabase(DB);
  return newUser;
};

const updateUser = (changes, userId) => {
  const userIndex = DB.users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    console.log("User isn't exists");
    return null; // or throw new Error("User already exists");
  };
  const updatedUser = {
    ...DB.users[userIndex],
    ...changes,
    updatedAt: new Date().toISOString()
  };
  DB.users[userIndex] = updatedUser;
  saveToDatabase(DB);
}

const deleteUser = (userId) => {
  const userIndex = DB.users.findIndex((user) => user.id === userId);

  console.log(userIndex)

  if (userIndex === -1) {
    console.log("User isn't exists");
    return null; // or throw new Error("User already exists");
  };

  DB.users.splice(userIndex, 1);
  saveToDatabase(DB);
}

module.exports = { 
  getAllUsers,
  getUserById,
  postUser,
  updateUser,
  deleteUser
};
