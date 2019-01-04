const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b', 
        },
            limite: {
                alias: 'l',
                default: 10
        }
    
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b', 
        },
            limite: {
                alias: 'l',
                default: 10
        }
    
    })
    .help()
    .argv;



const {crearArchivo, listarTabla} = require('./Multiplicar/multiplicar')


let command = argv._[0]; /* ._ hace referencia al objeto*/

switch( command ){

    case 'listar':
        listarTabla( argv.base, argv.limite );
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then ( archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err))
        break;

    default:
    console.log('Comando no reconocido');
}

// let parametro = argv[2];
// let base = parametro.split('=')[1]

