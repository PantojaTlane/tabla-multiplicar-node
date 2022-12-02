
/*
    COMANDOS PARA INSTALAR PAQUETES
    
    Comenzar a crear el package json
    -npm init                                se comenzara a especificar un package json de forma manual donde especificara detalles del proyecto
    -npm init -y                             indica que tambien se instale el package json
    -npm run palabraComando                  es para ejecutar un comando definido en el package.json en scripts
    -npm install nombreLibreria              es para instalar cierta libreria
    -npm install nombreLibreria --save-dev   es para decir que esa libreria solo se utilizara en modo desarrollo
    -npm uninstall nombreLibreria            es para desinstalar cierta libreria
    -npm i nombreLibreria@numero-version     es para instalar una cierta version de libreria ej.  npm i colors@1.0.0 
    -npm update                              es para actualizar las librerias a su version mas reciente
*/

const {crearArchivo} = require('./helpers/multiplicar');
const colors = require('colors');


const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,' creado'.rainbow))
    .catch(err => console.log(err.red))