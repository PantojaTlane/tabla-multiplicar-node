const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar, h) => {
    
    try {

        if(listar){
            console.log("==============================".bgWhite.black);
            console.log(`         Tabla del ${base}    `.bgWhite.black);
            console.log("==============================".bgWhite.black)
        }

        let salida = '';
        let consola = '';

        for(let i = 1; i <= h; i++){
            consola += `${base} ` + 'x ' + `${i} = ${i*base}\n`;
            salida += `${base} `.rainbow.underline + 'x '.bgYellow.underline + `${i} = ${i*base}\n`.bgCyan.underline;
        }

        if(listar){
            console.log(salida);
        }
        
        await fs.writeFileSync(`./salida/tabla-${base}.txt`,consola);
        
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }

};

module.exports = {
    crearArchivo
};