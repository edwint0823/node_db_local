const {crearArchivoTabla} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors')

console.clear()
crearArchivoTabla(argv).then(nombreArchivo => console.log(nombreArchivo.rainbow)).catch(err => console.error(err))

