const TonerModel = require("../../models/toners.models");

const getTonerByNameService = async (req) => {
  const { name } = req.params;
  return TonerModel.findOne({ name: name });
};

module.exports = getTonerByNameService;
