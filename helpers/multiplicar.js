const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        
       
        let salida, consola = '';
        
        
        for( i = 1; i <= hasta ; i++ ) {
            consola += `${ base } X ${ i } = ${ base * i } \n`.black.bgBrightYellow;
            salida += `${ base } X ${ i } = ${ base * i } \n`;
        }
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        
        if ( listar ) {

            console.log('==============='.rainbow);
            console.log('Tabla del '.black.bgYellow, base );
            console.log('==============='.rainbow);
            console.log(consola);

        }
            
        return `tabla-${ base }.txt`;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}

