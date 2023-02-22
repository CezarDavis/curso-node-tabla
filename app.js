const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');

require('colors');
console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log("numero:yargs", argv.numero);

// const [, , arg3= 'numero=5'] = process.argv;

// //const[ , ,arg3]= process.argv;
// const [, numero=5] = arg3.split('=');
// //console.log(numero);

// // console.log('====================');
// // console.log('TABLA DEL 5');
// // console.log('====================');

// //const numero =  5;
crearArchivo(argv.n, argv.l, argv.r).then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado')).catch(err => console.log(err));   

//let salida = '';

// for(let i =1; i<=multi ; i++){
//     salida += `${numero} x ${i} = ${numero*i}\n`;
// }
// console.log(salida);

// // fs.writeFile(`tabla-${numero}.txt`, salida, (err) => {
// //     if(err) throw err;
// //     console.log(`tabla-${numero}.txt creado`);
// // })

// fs.writeFileSync(`tabla-${numero}.txt`, salida);

// console.log(`tabla-${numero}.txt ha sido creado`);
