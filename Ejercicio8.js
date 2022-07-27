/*Funcion que recibe un array por parametro y elimina los tres primeros elementos del array, 
si el array tiene menos de 3 elementos, devuelve un array vacio.*/






function eliminarTresElementos(array1){


if(array1.length >= 3){
    let array2 = array1.slice(3);
    return array2
}
else{
    return array1 = [ ];
}
}

console.log(eliminarTresElementos([7,8,5,6]))

/*Funcion con Map() */

