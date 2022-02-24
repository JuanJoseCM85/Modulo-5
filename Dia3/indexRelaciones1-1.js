let mongoose = require ("mongoose");
let Persona = require("./esquemaPersona");
let Licencia = require("./esquemaLicenciaPesca");

mongoose.connect('mongodb://localhost:27017/codenotch',{useNewUrlParser: false, useUnifiedTopology: false});

// let personaDocument = new Persona({
//     nombre: "Juan José",
//     apellidos: "Cabrera Maldonado",
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

// let licenciaDocument = new Licencia({
//     numerLicencia: 1,
//     fechaExpedicion: "1985-05-05",
//     fechaCaducidad: "2024-10-10",
//     titular: "62167982bc09a9e133911d64"
// });

// licenciaDocument.save(checkRespuesta);

Licencia.findOne({numerLicencia: "1"})
.populate("titular")
.exec(function(err,poseedor){
    if (err)
        console.log(err);
    
    console.log(`El uusario ${poseedor.titular.nombre} tiene una licencia con numero de Licencia ${poseedor.numerLicencia}`);
    console.log(poseedor);
});
