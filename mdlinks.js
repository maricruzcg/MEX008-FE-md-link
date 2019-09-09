const path = require('path');
const fs = require('fs');


// const readFile = {
    //     newReadFile : pathFile => {
        
        //     }    
        // } 
        //(pathFile) => {

//Funcion para leer archivo

const readFile = (pathFile) => {
    //Crear promesa
    const promesa = new Promise ((resolve, reject) => {
        //Llamo al sistema de archivo
        fs.readFile(pathFile, "uft8" (err, data)) => {
            if(err) reject(err.message) {
                console.log("Tu ruta no existe")
            }
        }

    })

}

module.exports = readFile