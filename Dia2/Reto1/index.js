let mongoose = require("mongoose");
let User = require("./esquemaUsuario");
let Profile = require("./esquemaProfile");
let Credential = require("./esquemaCredenciales");

mongoose.connect('mongodb://localhost:27017/codenotch',{useNewUrlParser: false, useUnifiedTopology: false});

// let userDocument = new User({
//     login: "root",
//     password: "j1j2"
// });

// userDocument.save(checkRespuesta);
// function checkRespuesta(err,res){
//     if (err)
//         console.log("Error " + err);
//     else{
//         console.log("Documento guardado correctamente");
//     }
// }

let profileDocument = new Profile({
    name: "Juanjo",
    surname: "Cabrera Maldonado",
    dateOfBirth: "2003-05-02",
    comments: "Esto es un comentario",
    rol: "Admin"
});

profileDocument.save(checkRespuestaProfile);
function checkRespuestaProfile(err,res){
    if (err)
        console.log("Error "+ err);
    else{
        console.log("Documento guardado correctamente.");
        }
}

// let credetialDocument = new Credential({
//     addres: "Ctra. de Pampanico2",
//     phone: 635665341,
//     email: "miemail@gmail.com"
// });

// credetialDocument.save(chekRespuestaCredential);
// function chekRespuestaCredential(err,res){
//     if (err)
//         console.log("Errro "+ err);
//     else{
//         console.log("Documento guardado correctamente");
//         console.log(res);
//     }
// }
