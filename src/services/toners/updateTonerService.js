const TonerModel = require("../../models/toners.models");

const updateTonerService = async (req) => {
  const { name } = req.params;
  const toner = req.body;
  const updateToner = await TonerModel.findOne({ name });
  updateToner.name = toner.name;
  updateToner.model = toner.model;
  await updateToner.save();
  return updateToner.name;
};

module.exports = updateTonerService;
