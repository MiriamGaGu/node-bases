const {crearArchivo} = require('./Multiplicar/multiplicar')

let base = 'abc';

crearArchivo(base)
    .then ( archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err))