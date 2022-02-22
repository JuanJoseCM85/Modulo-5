const mongoose = require("mongoose");

const credentialsSchema = new mongoose.Schema({
    addres: String,
    phone: Number,
    email: String
});

module.exports = mongoose.model("Credentials", credentialsSchema);