const { model, Schema } = require("mongoose");

const TonerSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre del toner es obligatorio"],
    unique: true,
  },
  model: {
    type: String,
    required: [true, "El modelo del toner es obligatorio"],
  },
  quantity: {
    type: Number,
  },
  create_at: { type: Date, default: Date.now },
});

const TonerModel = model("Toner", TonerSchema);

module.exports = TonerModel;
