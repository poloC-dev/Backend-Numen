const TonerModel = require("../../models/toners.models");

const addTonerService = async (req) => {
  const toner = req.body;

  const newToner = new TonerModel(toner);

  await newToner.save();

  return toner;
};

module.exports = addTonerService;
