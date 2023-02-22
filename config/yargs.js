const argv = require('yargs')
  .option('n', {
    alias: 'numero',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola',
  })
  .option('r', {
    alias: 'rango',
    type: 'string',
    demandOption: true,
    describe: 'Muestra el rango de la tabla en consola'
  })
  .check((argv, options) => {
        if(isNaN(argv.n)){
            throw 'La base tiene que ser un número'
        }
        return true;
  })
  .argv;

  module.exports = argv;