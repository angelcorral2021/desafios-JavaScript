//Funcion con dos parametros(text,flag)
//Si flag es igual a "start", retorna los 3 primeros caracteres del parametro text
//Si flag es igual a "end" , retorna los 3 ultimos caracteres del parametro text
//Si el parametro text tiene menos de 3 caracteres debe retornar el texto

function recorte(text, flag = "start"){

    if (text.lenght < 3){
        return text
    }

    else if(flag === "start"){
        nueva = text.slice(0,3) // slice es para extraer una cadena de un array
        return nueva
    }
    else if(flag === "end"){
        nueva = text.slice(-3)
        return nueva
    } 
    
}

console.log(recorte("ab" ))

function nueva_cadena(text, flag = "start"){
    return text.lenght < 3 ? text : flag === "start" ? text.slice(0,3):text.slice(-3)
    //Pregunatmos si el largo de la cadena es menor a 3 si es asi retorna el texto si no
    //pregunatmos si flag === "start" si es true slice(0,3) si no slice(-3)
}

console.log(nueva_cadena("ba", "end"))