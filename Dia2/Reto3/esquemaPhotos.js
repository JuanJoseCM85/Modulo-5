const mongoose = require("mongoose");

const photosSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    titulo:{
        type: String,
        required: true
    },
    descripcion: String
});

module.exports = mongoose.model("Photo",photosSchema);