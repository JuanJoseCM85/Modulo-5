let mongoose = require ("mongoose");
let Persona = require("./esquemaPersona");
let Piso = require("./esquemaPisoMultipropiedad");

mongoose.connect('mongodb://localhost:27017/codenotch',{useNewUrlParser: false, useUnifiedTopology: false});

// let personaDocument = new Persona({
//     nombre: "Luiz",
//     apellidos: "Lopez Lopez",
//     dni: "53711728N",
//     fechaNacimiento: "1985-05-02"
// });

// personaDocument.save(checkRespuesta);
// function checkRespuesta(err,resu){
//     if (err)
//         console.log("Se ha producido un error: " + err);
//     else{
//         console.log("Documento Insertado correctamente");
//         console.log(resu);
//     }
        
// }

// let pisoDocument = new Piso({
//     direccion: "Calle Lovento",
//     numero: 5,
//     ciudad: "Madrid",
//     titular: ["62167982bc09a9e133911d64","62167982bc09a9e133911d64"]
// });

// pisoDocument.save(checkRespuesta);

Piso.findOne({ciudad: "Madrid"})
.populate("titular")
.exec(function(err,poseedor){
    if (err)
        console.log(err);
    
    console.log(`El uusario ${poseedor.titular[0].nombre} tiene un piso en ${poseedor.ciudad}`);
    console.log(poseedor);
});