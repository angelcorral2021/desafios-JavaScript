import moment from 'moment';
/**Escriba una funcion que reciba dos parametros (a,b) donde a es un Date
 * y b es un numero.
 * adicione dias para date a deacuerdo con el numero b
 */

 const dia1 = new Date("2022-05-02");
 
 let suma = 6;

 let prueba = dia1.getTime() + (suma * (1000*60*60*24))

 console.log(new Date(prueba))