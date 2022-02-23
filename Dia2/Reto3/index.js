let mongoose = require ("mongoose");
let User = require("./esquemaUser");
let Photo = require("./esquemaPhotos");

mongoose.connect('mongodb://localhost:27017/codenotch',{useNewUrlParser: false, useUnifiedTopology: false});

let userDocument = new User({
    login: "UsuarioLogin2",
    password: "UnpassWord33",
    name: "Luis",
    surname: "Simon",
    addres: "Ctra La Locura, 10",
    dateOfBirth: "1984-02-02",
    comments: "Estos comentarios son muy importantes.",
    rol: "Editor",
    phone: 656556644,
    email: "LuisSimon@gmail.com",
    follow: "62141ddd9db5176b84838d99"
});

userDocument.save(checkRespuesta);
function checkRespuesta(err,res){
    if(err)
        console.log("Error" + err);
    else
        console.log("Documento Guardado Correctamente.");
}

let photoDocument = new Photo({
    nombre: "Una foto cualquiera",
    url:"./images/fotoparaelrecuerdo.jpg",
    titulo: "Recuerdos",
    descripcion: "Fotografía donde se plasma la vida en su etado más cruel"
});

photoDocument.save(checkPhotoRespuesta);
function checkPhotoRespuesta(err,res){
    if(err)
        console.log("Error"+ err);
    else
        console.log("Documento Guardado Correctamente");
}