const mongoose = require("mongoose");
require("dotenv").config();

const DATABASE = process.env.DATABASE_URL || "";
// IFE, una funcion que se llama automaticamente
(async () => {
  try {
    await mongoose.connect(DATABASE);
    console.log("Database conectada :D");
  } catch (error) {
    console.error(error);
  }
})();
// los parentesis al final hacen que se autoinvoque
module.exports = mongoose;
