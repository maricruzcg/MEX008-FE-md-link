const path = require('path');
const fs = require('fs');

//Funcion para leer archivo, archivo tenia que cambiar nombre, porque se sobre escribia

const analiticFile = (pathFile) => {
    //Crear promesa, colocar return
    return new Promise ((resolve, reject) => {
        //Llamo al sistema de archivo, dentro de la promesa
        fs.readFile(pathFile, "utf-8", (err, data) => {
            if(err){
                //Si cacha el error 

                reject(err.message) 
                console.log("Tu ruta no existe")
                
            } else {
                resolve(data)
            }
        });
    });
};

module.exports = analiticFile;
    // const readFile = {
        //     newReadFile : pathFile => {
            
            //     }    
            // } 
            //(pathFile) => {