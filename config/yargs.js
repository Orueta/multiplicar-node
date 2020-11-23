// Todo: Utilizando el yargs 
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en cosola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo tabla de multiplicar', opts)
    .help()
    .argv;

// Exportamos el objeto argv para poder utilizarlo en otros archivos del proyecto
module.exports = {
    argv
}