const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    login: String,
    password:{
            type: String,
            validate:[
                function(password){
                    return password.length >=8;
                },
                "El password debe tener una longitud minima de 8 caracteres"
            ]
    }
});


module.exports = mongoose.model("User", userSchema);