const mongoose = require("mongoose");

const personaSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    dni: String,
    fechaNacimiento: Date
});

//let PersonaModel = mongoose.model("Persona",personaSchema);
module.exports = mongoose.model("Persona", personaSchema);