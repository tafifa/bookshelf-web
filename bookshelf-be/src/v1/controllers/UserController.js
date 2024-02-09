const {
  getAllUsersService,
  getUserByIdService,
  postUserService,
  updateUserService,
  deleteUserService
} =  require("../services/UserService");

const getAllUsersController = (req, res) => {
  const allUsers = getAllUsersService();
  res.status(201).send({ status: "Success", message:"Users found", data: allUsers });
};

const getUserByIdController = (req, res) => {
  const {
    params: { UserId }
  } = req;

  if (!UserId) {
    return res.status(400).send("There is no Id given");
  }

  const User = getUserByIdService(UserId);

  if (User === null) {
    return res.status(404).send({status: "Error", message:"There is no User"});
  }

  res.status(201).send({ status: "Success", data: User });
};

const postUserController = (req, res) => {
  const { body } = req;

  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({status: "Error", message:"There is no User"});
  }

  postUserService(body);
  res.status(201).send({status: "Success", message:"User has been Created"});
};

const updateUserController = (req, res) => {
  const { 
    body,
    params: { UserId }
  } = req;

  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({status: "Error", message:"There is no changes given"});
  }
  if (!UserId) {
    return res.status(400).send({status: "Error", message:"There is no id given"});
  }

  updateUserService(body, UserId);
  res.status(201).send({status: "Success", message: "User has been updated"});
};

const deleteUserController = (req, res) => {
  const {
    params: { UserId }
  } = req;

  if (!UserId) {
    return res.status(400).send({status: "Error", message:"There is no id given"});
  }

  deleteUserService(UserId);
  res.status(201).send({status: "Success", message: "User has been deleted"});
};

module.exports = {
  getAllUsersController,
  getUserByIdController,
  postUserController,
  updateUserController,
  deleteUserController
};
