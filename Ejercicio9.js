/*  Funcion que recibe un array A y un valor B como parametros
se debe retornar un nuevo array sin los elemetos que coinciden con B*/

let array = [2,3,4,5,2,4,5,6,4,3,2,5,3,2,2,3,4,6,78,8];
let value = 2;

let otroArry = array.filter(i => i !== 2)
console.log(otroArry)

function deleteElement(a,b){
    
    return nuevoArray = a.filter(i => i !== b);
    
}

console.log(deleteElement([1,2,3,false,4,5,5,4,"2"],false))