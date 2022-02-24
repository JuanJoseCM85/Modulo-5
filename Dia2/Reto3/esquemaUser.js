const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

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
    },
    name: String,
    surname: String,
    addres: String,
    dateOfBirth: Date,
    comments:{
        type: String,
        validate:[
            function(comments){
                return comments.length > 5; 
            },
            "Es obligatorio insertar un comentario de más de 5 caracteres"
        ]
    },
    rol:{
        type: String,
        enum:["Admin","User","Editor"]
    },
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
    },
    follow: [ObjectId],
    fotos: [{type: mongoose.Schema.Types.ObjectId, ref: "Photo"}]

});


module.exports = mongoose.model("User", userSchema);