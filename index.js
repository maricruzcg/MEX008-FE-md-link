const readFile = require("./mdlinks");
//const matriz = process.argv;
const pathFile = process.argv[2];

module.exports = () => {
  //necesitaba poner el then y el catch para que sepa que va hacer con la informacion
  //que obtenga
  readFile(pathFile).then(data => console.log(data)).catch(err => console.log(err));
};