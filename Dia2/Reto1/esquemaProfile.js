const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: String,
    surname: String,
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
    }
});

profileSchema.pre('save', function(next){
    console.log("Entramos al midelware de profile");
    let mayor = new Date("2004-01-01");
    if ( this.dateOfBirth > mayor){
        console.log("Creando perfil para una persona mayor de edad...");
        next();
    }else
        console.log("Solo se admiten perfiles para mayores de edad");
});

module.exports = mongoose.model("Profile", profileSchema);