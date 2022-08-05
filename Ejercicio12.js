/*Escriba una funcion  que reciba un arra de numeros (A) y aparte un array de un numero B
 como parametros y que devuelva la suma de todos los numeros mayor al numero B */

function sumaArray(a, b) {
  let acumulador = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] > b) {
      suma = a[i];
      console.log(suma);
      acumulador = acumulador + suma;
    }
  }
  return acumulador;
}

console.log(sumaArray([33,45,88,105,111],99));
