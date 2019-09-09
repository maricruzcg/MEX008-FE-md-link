const readFile = require("./mdlinks");
const matriz = process.argv;
const pathFile = process.argv[2];

module.exports = () => {
  readFile(pathFile).then(data =>console.log(data)).catch(err => console.log(err));
  console.log("Hola")
};