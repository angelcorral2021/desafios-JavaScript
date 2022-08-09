/**Escriba una funcion que reciba dos parametros(a,b) siendo ambos de tipo DATE.
 * retorne TRUE si ambos Date son iguales.Caso contrario retorne False
 */




function myfuction(a,b){
   return a.getTime() === b.getTime()
    
};

console.log(myfuction(new Date('2022/04/06 06:30:00'),new Date('2022/04/06 06:30:00')))

let fecha1 = new Date('2022/04/06 06:30:00');
let fecha2 = new Date('2022/04/06 06:30:00');

console.log(fecha1.getTime())
console.log(fecha2.getTime())