/**Escriba una funcion que reciba dos date como parametros y retorne el numero de dias 
 * entre esos date
 */

const moment = require("moment");

const dia1 = new Date("2022-05-01");
const dia2 = new Date("2022-06-02");

let resultado = dia2.getTime() - dia1.getTime();
console.log(resultado)
console.log(Math.round(resultado/ (1000*60*60*24)));

let prueba = moment(dia1).subtract(1,'day')

console.log(moment(prueba).format("MMM Do YY") )
