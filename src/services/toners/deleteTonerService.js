const TonerModel = require("../../models/toners.models");

const deleteTonerService = async (req) => {
  const { name } = req.params;
  const response = await TonerModel.findOneAndDelete({ name: name });
  if (response.deletedCount == 0)
    throw new Error(`No se encontro el toner ${name}`);
  return name;
};

module.exports = deleteTonerService;
