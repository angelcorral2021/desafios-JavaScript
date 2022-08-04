//Escriba una funcion que reciba dos arrays y devuelva uno con los arrays concatenados, no deben tener valores repetidos


function myArray (a,b){

const nuevoArray = a.concat(b)
const unicos = [];
for (let i = 0; i < nuevoArray.length; i++){
    const acumulador = nuevoArray[i]
    if (!unicos.includes(nuevoArray[i])){//el simbolo ! es para negar 
        unicos.push(acumulador)
    }
}

const arrayFinal = unicos.sort((a,b) => {
 
    if (a ===b ){
        return 0
    }
    if (a < b){
        return -1
    }
    if (a > b){
        return 1
    }
})
return arrayFinal
}

console.log(myArray([1,2,3,3,4,5,6,7,123], [14,3,4,5,6]))

