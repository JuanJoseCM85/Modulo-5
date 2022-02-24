const mongoose = require("mongoose");

const pisoMultiMSchema = new mongoose.Schema({
    direccion: String,
    numero: Number,
    ciudad: String,
    titular: [{type: mongoose.Schema.Types.ObjectId, ref: "PersonaPiso"}]
});

module.exports = mongoose.model("PisoMultiM", pisoMultiMSchema);