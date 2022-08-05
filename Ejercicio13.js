/*Escriba una funcion que reciba dops parametros(Minimo y Maximo) y retorne una array de numeros deacuerdo 
con un intervalo*/



function arrayNumeros (a,b){
let acumulador = []
for(i= a;i < b+1;i++){
     suma = i
     console.log(suma)
     acumulador.push(suma)
}
return acumulador
}

console.log(arrayNumeros(-5,5))
