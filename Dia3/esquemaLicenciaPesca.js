const mongoose = require("mongoose");

const licenciaSchema = new mongoose.Schema({
    numerLicencia: Number,
    fechaExpedicion: Date,
    fechaCaducidad: Date,
    titular: {type: mongoose.Schema.Types.ObjectId, ref: "Persona"}
});

//let LicenciaModel = mongoose.model("Licencia", licenciaSchema);
module.exports = mongoose.model("Licencia", licenciaSchema);