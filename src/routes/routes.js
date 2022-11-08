const express = require("express");
const {
  addTonerController,
  getTonersController,
  getTonerByNameController,
  updateTonerController,
  deleteTonerController,
} = require("../controller/userController");
const validator = require("../utils/validator");
const { body } = require("express-validator");
const router = express.Router();

router.get("/toner", getTonersController);

router.get("/toner/:name", getTonerByNameController);

router.put("/toner/:name", updateTonerController);

router.post(
  "/toner",
  body("name").isLength({ min: 2, max: 15 }),
  body("model").isLength({ min: 2, max: 15 }),
  validator,
  addTonerController
);

router.delete("/toner/:name", deleteTonerController);

module.exports = router;
