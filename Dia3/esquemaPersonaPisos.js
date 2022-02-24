const mongoose = require("mongoose");

const personaPisoSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    dni: String,
    fechaNacimiento: Date,
    pisos: [{type: mongoose.Schema.Types.ObjectId, ref: "PisoMultiM"}]
});

//let PersonaPisoModel = mongoose.model("PersonaPiso",personaPisoSchema);
module.exports = mongoose.model("PersonaPiso", personaPisoSchema);