const mongoose = require("mongoose");

const credentialsSchema = new mongoose.Schema({
    addres: String,
    phone:{
        type: Number,
        min: 600000000,
        max: 900000000
    },
    email:{
       type: String,
       validate:[
           function(email){
               return email.indexOf("@") != -1;
           },
           "Debe introducir un email válido"
       ] 
    }
});

module.exports = mongoose.model("Credentials", credentialsSchema);