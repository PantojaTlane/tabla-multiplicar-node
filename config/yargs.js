const argv = require('yargs')
                        .option('b',{
                            alias:'base',
                            type: 'number',
                            demandOption: true, //Verificar que se ingrese un valor al argumento
                            describe: 'Es la base de la tabla de multiplicar'
                        })
                        .option('l',{
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            describe: 'Muestra la tabla de multiplicar en pantalla'
                        })
                        .option('h',{
                            alias: 'hasta',
                            type: 'number',
                            demandOption: true,
                            describe: 'Hasta donde llega la tabla de multiplicar'
                        })
                        .check((argv,options) => {
                            const base = argv.b;
                            if(!base){
                                throw new Error("La base tiene que ser un numero");
                            }else{
                                return true;
                            }
                        })
                        .check((argv, options) => {
                            const hasta = argv.h;
                            if(!hasta){
                                throw new Error("El limite tiene que ser un numero");
                            }
                            return true;
                        })
                        .argv;

module.exports = argv;