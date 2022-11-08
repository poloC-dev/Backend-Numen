const addTonerService = require("../services/toners/addTonerService");
const getTonersService = require("../services/toners/getTonersService");
const getTonerByNameService = require("../services/toners/getTonerByNameService");
const updateTonerService = require("../services/toners/updateTonerService");
const deleteTonerService = require("../services/toners/deleteTonerService");

const getTonersController = async (req, res) => {
  try {
    const toners = await getTonersService();
    res.json(toners);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const getTonerByNameController = async (req, res) => {
  try {
    const toners = await getTonerByNameService(req);
    res.json(toners);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const addTonerController = async (req, res) => {
  try {
    const addToners = await addTonerService(req);
    res.status(201).json({ message: `Creado el toner ${addToners.name}` });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const updateTonerController = async (req, res) => {
  try {
    const updateToner = await updateTonerService(req);
    res.status(200).json({ message: `Modificado el toner ${updateToner}` });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const deleteTonerController = async (req, res) => {
  try {
    const deleteToner = await deleteTonerService(req);
    res.json({ message: `Toner ${deleteToner} a sido eliminado con exito` });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

module.exports = {
  getTonersController,
  addTonerController,
  getTonerByNameController,
  updateTonerController,
  deleteTonerController,
};
