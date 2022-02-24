let mongoose = require ("mongoose");
let PersonaPiso = require("./esquemaPersonaPisos");
let PisoMultiM = require("./esquemaMultiPropM");


mongoose.connect('mongodb://localhost:27017/codenotch',{useNewUrlParser: false, useUnifiedTopology: false});

// let personaPisoDocument = new PersonaPiso({
//     nombre: "Luiz",
//     apellidos: "Lopez Lopez",
//     dni: "53711728N",
//     fechaNacimiento: "1985-05-02",
//     pisos:[]
// });
// let personaPisoDocument2 = new PersonaPiso({
//     nombre: "Jose",
//     apellidos: "Perez Gimenez",
//     dni: "55666888N",
//     fechaNacimiento: "1983-05-02",
//     pisos:[]
// });
// let personaPisoDocument3 = new PersonaPiso({
//     nombre: "Paula",
//     apellidos: "Vazquez Gimenez",
//     dni: "55666888N",
//     fechaNacimiento: "1983-05-02",
//     pisos:[]
// });


// let idPersonas = [];
// let idPisosMultiM = [];

// personaPisoDocument.save()
// .then((resu)=>{
    
//         console.log("Documento insertado correctamente");
//         idPersonas.push(resu._id);
//         return personaPisoDocument2.save();
    
// })
// .then((resu)=>{
    
//         console.log("Documento insertado correctamente");
//         idPersonas.push(resu._id);
//         return personaPisoDocument3.save();
    
// })
// .then((resu)=>{
//         console.log("Documento insertado correctamente");
//         idPersonas.push(resu._id);

//         let pisoDocument1 = new PisoMultiM({
//             direccion: "Calle Lovento",
//             numero: 5,
//             ciudad: "Madrid",
//             titular: [idPersonas[0],idPersonas[1]]
//         });
//         return pisoDocument1.save();
// })
// .then((resu)=>{
//     idPisosMultiM.push(resu._id);
//     let pisoDocument2 = new PisoMultiM({
//         direccion: "Calle Una Calle",
//         numero: 5,
//         ciudad: "Almeria",
//         titular: [idPersonas[0],idPersonas[2]]
//     });
//     pisoDocument2.save();
// })
// .catch(err=>{
//         console.log(err);
// })

//let PersonaPisoModel = mongoose.model("PersonaPiso", personaPisoSchema);
// PersonaPiso.findOne({nombre: "Luiz"})
// .populate("pisos")
// .exec(function(err,piso){
//     if (err)
//         console.log(err);
    
//     console.log(`El propietario ${piso.nombre} tiene ${piso.pisos.length} pisos`);
//     console.log(piso);
// });

PisoMultiM.findOne({ciudad: "Almeria"})
.populate("titular")
.exec(function(err,dueno){
    if (err)
        console.log(err);
    
    console.log(`El piso ${dueno.direccion} tiene ${dueno.titular.length} propietarios`);
    console.log(dueno);
});