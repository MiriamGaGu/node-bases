const fs = require('fs');

crearArchivo = (base) => {

    return new Promise ((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es número`)
            return;
        }

        let data = '';

        for( let i = 1; i <= 10; i++){
            
            data += (`${base} * ${i} = ${base *i}\n`);

        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {

            if(err) reject(err)

            else

                resolve(`tabla ${base}.txt`)

                console.log('el archivo tabla-2.txt ha sido creado');
        });

    })
}

module.exports = {
    crearArchivo
}









