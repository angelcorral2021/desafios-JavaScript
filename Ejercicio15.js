/* Escriba una funcion que reciba dos parametros(a,b) siendo a un objeto y b un string, retorne TRUE si el objeto posee
una propiedad/clave con un nombre pasado en b.
Caso contrario retorne FALSE*/



function myfuction(a,b){

   let claves = Object.keys(a);

    return claves.includes(b);
};

console.log(myfuction({a : 1,b : 2,c : 3},"c"));