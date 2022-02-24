let mongoose = require ("mongoose");
let User = require("./esquemaUser");
let Photo = require("./esquemaPhotos");

mongoose.connect('mongodb://localhost:27017/codenotch',{useNewUrlParser: false, useUnifiedTopology: false});

// let listaFotos = [];
// Photo.findOne({nombre: "Juanico"})
// .then((data)=>{
//     console.log(data);
//     listaFotos.push(data._id);
//     return Photo.findOne({nombre: "Una foto cualquiera"});
// })
// .then((data)=>{
//     console.log(data);
//     listaFotos.push(data._id);
//     return User.findOneAndUpdate({name: "Carla2"},{fotos:listaFotos});
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOne({name: "Carla2"})
// .populate("fotos")
// .exec(function(err,coleccion){
//     if (err)
//         console.log(err);
    
//     //console.log(`El piso ${dueno.direccion} tiene ${dueno.titular.length} propietarios`);
//     console.log("Las fotos de " + coleccion.name +" son: " + coleccion.fotos);
//     console.log(coleccion);
// });









//Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’.
// function subidaFotos(usuario,urlFoto,titulo,descripcion){
   
    // let userDocument = new User({
    //     login: "loginUsuario",
    //     password: "elpassword1",
    //     name: "Luis3",
    //     surname: "apellido1",
    //     addres: "Una dirección",
    //     dateOfBirth: "2022-12-13",
    //     comments: "Estos son los comentarios del usuario",
    //     rol: "Editor",
    //     phone: 666555444,
    //     email: "unemail@email.com",
    //     follow: [],
    //     fotos: []
    // });
    
    // userDocument.save(checkPhotoRespuesta);
    // function checkPhotoRespuesta(err,res){
    //     if(err)
    //         console.log("Error"+ err);
    //     else
    //         console.log("Documento Guardado Correctamente");
    // }




//subidaFotos("Juanico","./images/juanico.jpg","Titulo 2","Descripción de titulo2");

//Dado un usuario obtener todas sus fotos

// function obtenerFotos(usuario){
//     Photo.find({nombre: usuario},checkPhotoRespuesta);
//     function checkPhotoRespuesta(err,res){
//         if(err)
//             console.log("Error"+ err);
//         else{
//             console.log("Listado de fotos encontradas");
//             for (let i=0; i< res.length; i++){
//                 console.log(res[i].url);
//                 return res[i];
//             }
                
//         }
            
//     }
// }

//obtenerFotos("Juanico");

//Dado un usuario origen y ot oriro destino hacer quegen siga a destino.
// function seguir(usuarioOrigen, usuarioDestino){
    
//     User.findById(usuarioOrigen)
//     .then((data)=>{
//         let seguidos = data.follow;
//         seguidos.push(usuarioDestino);
//         return User.findByIdAndUpdate(data._id,{follow:seguidos});
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
    
// }  
    
// seguir("621774b7538c1182edfba91f","62176ecdfc92f281c8ac5195");

function obtenerTimeline(usuarioOrigen){

    User.findById(usuarioOrigen)
    .then((data)=>{
        for(let i=0; i<data.follow.length; i++){
            User.findById(data.follow[i])
            .then((data)=>{
                console.log("Longitud de fotos"+ data.fotos.length);
                for(let j=0; j<data.fotos.length; j++){
                    Photo.findById(data.fotos[j])
                    .then((data)=>{
                        //Aqui tenemos que mostrar los datos de la foto.
                        console.log(data);
                        
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }                    
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}

obtenerTimeline("621774b7538c1182edfba91f");
    
    
    // User.findOneAndUpdate({_id: usuarioOrigen},{follow:usuarioDestino},checkRespuesta);
    // function checkRespuesta(err,res){
    //     if(err)
    //         console.log("Error"+ err);
    //     else
    //         {
    //             console.log("Siguiendo");
    //             console.log(res);
    //     }
    // }


//seguir("6215832c538e5e70c5c07c0c","621569c75f5368ce17d474de");

// Dejar de seguir:
// Dado un usuario origen y uno destino hacer que el usuario origen deje de seguir al usuario destino. Si
// el usuario destino no coincide con el seguido por el usuario origen no hacer nada.

// function noSeguir(usuarioOrigen, usuarioDestino){
//     User.findById(usuarioOrigen,checkRespuesta);
//     function checkRespuesta(err,res){
//         if(err)
//             console.log("Error"+ err);
//         else{
//             console.log("Origen =" + res.follow +" - "+ usuarioDestino + "= UsuarioDestino");
//             if( res.follow == usuarioDestino){
//                 User.findByIdAndUpdate(usuarioOrigen,{follow:null},checkRespuesta2);
//                 function checkRespuesta2(err,res){
//                     if(err)
//                         console.log("Error"+ err);
//                     else
//                         {
//                             console.log("Dejamos de seguir a" + usuarioDestino);
//                             console.log(res);
//                     }
//                 }
//             }else{
//                 console.log("Nothing to do");
//             }
//             // console.log("Eliminamos la foto");
//             // console.log(res);
//         }
            
//     }
// }

//noSeguir("6215832c538e5e70c5c07c0c","621569c75f5368ce17d474de");


// Eliminar Foto:
// Dado un usuario y un titulo de foto eliminar su foto.
// Hacer un delete del Photo

// function eliminarFoto(usuario, titulo){
//     Photo.findOneAndUpdate({nombre:usuario, tiutlo: titulo},{url:""},checkRespuesta);
//     function checkRespuesta(err,res){
//         if(err)
//             console.log("Error"+ err);
//         else{
//             console.log("Eliminamos la foto");
//             console.log(res);
//         }
            
//     }
// }

//eliminarFoto("Juanico","Titulo 2");

// function eliminarTodasFotos(usuario){
//     Photo.find({nombre: usuario},checkPhotoRespuesta);
//     function checkPhotoRespuesta(err,res){
//         if(err)
//             console.log("Error"+ err);
//         else{
//             console.log("Listado de fotos encontradas");
//             for (let i=0; i< res.length; i++){
//                 //console.log(res[i].url);
//                 console.log(res[i]._id);
//                 Photo.findByIdAndUpdate(res[i]._id,{url:""},checkRespuesta2);
//                 function checkRespuesta2(err,res){
//                     if(err)
//                         console.log("Error"+ err);
//                     else{
//                         console.log("Eliminamos la foto");
//                         console.log(res);
//                     }
                        
//                 }

//             }
                
//         }
            
//     }
    
// }

//eliminarTodasFotos("Juanico");

