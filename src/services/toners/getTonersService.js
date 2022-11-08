const TonerModel = require("../../models/toners.models");

const getTonersService = async () => {
  return TonerModel.find();
};

module.exports = getTonersService;
