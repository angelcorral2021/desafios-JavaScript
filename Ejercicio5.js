//Funcion que recibe dos parametros (fullname,flag)
//Si flag es igual a "firstname", retorna la primera palabra de fullname
//Si flag es igual a "lastname" , retorna todo el texto ecxepto la primera palabra de fullname
//Si flag esta vacio o fullname contiene una palabra siempre debe retornar todo fullname

function myfuncion(fullname, flag = " "){

    const nueva = fullname.split(" ")

    
    if (flag == " " || nueva.length < 2 )
        return (fullname)
    
    else if (flag === "firstname"){
        return (nueva[0])  
    }
    
    else (flag === "lastname");{
        last = nueva.slice(1).join(" ")//Con splice tambien resulta
        return (last)
    }
    
}

console.log(myfuncion("angel cristobal corral", "lastname" ))

//Otra forma


function flag_name(fullname, flag = ""){
    const partes = fullname.split(" ")
    return flag.length == 0 || partes.length <= 1 ? fullname : flag === "firstname" ? partes[0]:partes.slice(1).join(" ")
}

console.log(flag_name("angel cristobal corral", flag = ""))