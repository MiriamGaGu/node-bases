const {crearArchivo, listarTabla} = require('./Multiplicar/multiplicar')
const argv = require('./Config/yargs').argv;
const colors = require('colors/safe');

let command = argv._[0]; /* ._ hace referencia al objeto*/

switch( command ){

    case 'listar':
        listarTabla( argv.base, argv.limite );
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then ( archivo => console.log(`Archivo creado:`, colors.rainbow(archivo)))
            .catch(err => console.log(err))
        break;

    default:
    console.log('Comando no reconocido');
}


