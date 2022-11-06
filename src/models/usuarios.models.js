const { model, Schema } = require("mongoose");

const UsuarioSchema = Schema({
  username: {
    type: String,
    required: [true, "El nombre de usuario es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },
  create_at: { type: Date, default: Date.now },
});

const UsuarioModel = model("Usuario", UsuarioSchema);

module.exports = UsuarioModel;
