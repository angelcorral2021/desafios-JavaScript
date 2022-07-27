//Funcion que recibe 6 parametros 
//Suma a y b. Al resultado de la suma se le resta el valor de c.
//El resultado de la resta multipliucar por d y dividir por e
//Finalmente eleva el resultado a la potencia de f

function resultado(a, b, c, d, e, f){
    calculo = ((((a + b) - c) * d) / e) ** f 
    return calculo
}
//Otra forma de hacerlo
console.log(resultado(6,5,4,3,2,1,))

function P (a, b, c, d, e, f){
    var resultado = a + b - c;
    resultado = resultado * d / e;
    resultado = Math.pow(resultado, f);// Math.pow(base, exponente)
    return resultado;
}

console.log(P (6,5,4,3,2,1))