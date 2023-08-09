const fs = require('fs')
require('colors')
const crearArchivoTabla = async ({base = 5, listar=false, hasta}) => {
    try{

        let salida = ''
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if(listar){
            console.log('=========================='.green)
            console.log(`   Tabla del:${base}`.yellow)
            console.log('=========================='.green)
            console.log(salida.random)
        }
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        // console.log(`tabla-${base}.txt creado con exito`)
        return `tabla-${base}.txt creado con exito`
    }catch (e) {
        throw e
    }
}

module.exports = {
    crearArchivoTabla
}