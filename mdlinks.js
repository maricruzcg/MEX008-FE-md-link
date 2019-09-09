const path = require('path');
const fs = require('fs');

//Funcion para leer archivo

const readFile = (path) => {
    //Crear promesa
    const promesa = new Promise ((resolve, reject) => {
        //Llamo al sistema de archivo
        fs.readFile(path, "uft-8", (err, data) => {
            if(err){
                reject(err.message) 
                console.log("Tu ruta no existe")
                
            } else {
                resolve(data)
            }
        });
    });
};

module.exports = readFile
    // const readFile = {
        //     newReadFile : pathFile => {
            
            //     }    
            // } 
            //(pathFile) => {