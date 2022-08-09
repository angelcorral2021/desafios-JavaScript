/**Escriba una funcion que reciba dos arrays(a,b)como parametros y cree un objeto donde la propiedad/clave sea 
 * el array a y el valor sea el array b.
 * retorne el objeto
 */



function myfuction (a,b){

    const objeto = {};

    for(let i = 0; i < a.length;i++){
        objeto[a[i]] = b[i];
    }
    return objeto;
};

console.log(myfuction(['casa', 'edificio', 'departamento'],['arroz', 'fideos', 'carne']))