const addUserService = require("../services/users/addUserService");
const getUserService = require("../services/users/getUserService");
const getUserByUsernameService = require("../services/users/getUserByUsernameService");
const udapteUserService = require("../services/users/updateUserService");
const deleteUserService = require("../services/users/deleteUserService");

const getUserController = async (req, res) => {
  try {
    const users = await getUserService();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const getUserByUsernameController = async (req, res) => {
  try {
    const users = await getUserByUsernameService(req);
    res.json(users);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const addUserController = async (req, res) => {
  try {
    const addUser = await addUserService(req);
    res.status(201).json({ message: `Creado el usuario ${addUser.username}` });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const updateUserController = async (req, res) => {
  try {
    const updateUser = await udapteUserService(req);
    res.status(200).json({ message: `Modificado el usuario ${updateUser}` });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const deleteUser = await deleteUserService(req);
    res.json({ message: `Usuario ${deleteUser} a sido eliminado con exito` });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

module.exports = {
  getUserController,
  addUserController,
  getUserByUsernameController,
  updateUserController,
  deleteUserController,
};
