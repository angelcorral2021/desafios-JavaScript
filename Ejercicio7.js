//Funcion que recibe dos string (a,b) como argumento y retorna el numero de veces que un string a esta dentro del string b.

function string_dentro(a, b) {
let acumulador = 0;

for (let letra = 0; letra < b.length; letra += 1) {
    if (a.toUpperCase() == b[letra].toUpperCase()) acumulador += 1;
}
    return acumulador;
}

console.log(string_dentro("a", "mAmaderA"));

function contadorDeString(a,b){
    return b.toUpperCase().split(a.toUpperCase()).length - 1;

}

console.log(contadorDeString('a', 'mAmaderA'))
