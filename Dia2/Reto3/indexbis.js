let mongoose = require ("mongoose");
let User = require("./esquemaUser");
let Photo = require("./esquemaPhotos");

mongoose.connect('mongodb://localhost:27017/codenotch',{useNewUrlParser: false, useUnifiedTopology: false});

//Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’.
function subidaFotos(usuario,urlFoto,titulo,descripcion){
   
    let photoDocument = new Photo({
        nombre: usuario,
        url: urlFoto,
        titulo: titulo,
        descripcion: descripcion
    });
    
    photoDocument.save(checkPhotoRespuesta);
    function checkPhotoRespuesta(err,res){
        if(err)
            console.log("Error"+ err);
        else
            console.log("Documento Guardado Correctamente");
    }

}



//subidaFotos("Juanico","./images/juanico.jpg","Titulo 2","Descripción de titulo2");

//Dado un usuario obtener todas sus fotos

function obtenerFotos(usuario){
    Photo.find({nombre: usuario},checkPhotoRespuesta);
    function checkPhotoRespuesta(err,res){
        if(err)
            console.log("Error"+ err);
        else{
            console.log("Listado de fotos encontradas");
            for (let i=0; i< res.length; i++)
                console.log(res[i].url);
        }
            
    }
}

//obtenerFotos("Juanico");

//Dado un usuario origen y otro destino hacer que origen siga a destino.
function seguir(usuarioOrigen, usuarioDestino){
    User.findOneAndUpdate({_id: usuarioOrigen},{follow:usuarioDestino},checkRespuesta);
    function checkRespuesta(err,res){
        if(err)
            console.log("Error"+ err);
        else
            {
                console.log("Siguiendo");
                console.log(res);
        }
    }
}

//seguir("6215832c538e5e70c5c07c0c","621569c75f5368ce17d474de");

// Dejar de seguir:
// Dado un usuario origen y uno destino hacer que el usuario origen deje de seguir al usuario destino. Si
// el usuario destino no coincide con el seguido por el usuario origen no hacer nada.

function noSeguir(usuarioOrigen, usuarioDestino){
    User.findById(usuarioOrigen,checkRespuesta);
    function checkRespuesta(err,res){
        if(err)
            console.log("Error"+ err);
        else{
            console.log("Origen =" + res.follow +" - "+ usuarioDestino + "= UsuarioDestino");
            if( res.follow == usuarioDestino){
                User.findByIdAndUpdate(usuarioOrigen,{follow:null},checkRespuesta2);
                function checkRespuesta2(err,res){
                    if(err)
                        console.log("Error"+ err);
                    else
                        {
                            console.log("Dejamos de seguir a" + usuarioDestino);
                            console.log(res);
                    }
                }
            }else{
                console.log("Nothing to do");
            }
            // console.log("Eliminamos la foto");
            // console.log(res);
        }
            
    }
}

noSeguir("6215832c538e5e70c5c07c0c","621569c75f5368ce17d474de");


// Eliminar Foto:
// Dado un usuario y un titulo de foto eliminar su foto.

function eliminarFoto(usuario, titulo){
    Photo.findOneAndUpdate({nombre:usuario, tiutlo: titulo},{url:""},checkRespuesta);
    function checkRespuesta(err,res){
        if(err)
            console.log("Error"+ err);
        else{
            console.log("Eliminamos la foto");
            console.log(res);
        }
            
    }
}

//eliminarFoto("Juanico","Titulo 2");

function eliminarTodasFotos(usuario){
    Photo.find({nombre: usuario},checkPhotoRespuesta);
    function checkPhotoRespuesta(err,res){
        if(err)
            console.log("Error"+ err);
        else{
            console.log("Listado de fotos encontradas");
            for (let i=0; i< res.length; i++){
                //console.log(res[i].url);
                console.log(res[i]._id);
                Photo.findByIdAndUpdate(res[i]._id,{url:""},checkRespuesta2);
                function checkRespuesta2(err,res){
                    if(err)
                        console.log("Error"+ err);
                    else{
                        console.log("Eliminamos la foto");
                        console.log(res);
                    }
                        
                }

            }
                
        }
            
    }
    
}

//eliminarTodasFotos("Juanico");