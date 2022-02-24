const mongoose = require("mongoose");

const pisoSchema = new mongoose.Schema({
    direccion: String,
    numero: Number,
    ciudad: String,
    titular: [{type: mongoose.Schema.Types.ObjectId, ref: "Persona"}]
});

module.exports = mongoose.model("Piso", pisoSchema);