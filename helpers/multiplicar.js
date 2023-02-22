const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (numero, listar = false, rango) => {
  try {
    let salida = '';
    let consola = '';
    
    for (let i = 1; i <= rango; i++) {
      salida += `${numero} x ${i} = ${numero * i}\n`;
      consola += `${numero} ${'x'.blue} ${i} ${'='.magenta} ${numero * i}\n`;
    }

    if (listar) {
      console.log("=============".green);
      console.log("Tabla del:", colors.bgMagenta(numero));
      console.log("=============".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);

    return `tabla-${numero}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo
};
