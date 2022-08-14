/**Escribe una funcion que reciba dos arrays(a,b) como parametros.
 * Cree un objeto donde las claves sean los elementos de a y los valores sean los elemnetos de b
 * En caso de que a tenga menos elementos considere apenas los elementos correspomdientes a b.
 * En caso de que b tenga menos elementos que a coloque nullcomo valor correspondientes a a.
 * Retorne un objeto.
 */



function arrayObjeto(a,b){
let objeto = {};

for (i = 0; i < a.length; i++) {
  if (b[i] == undefined) {
    b[i] = null;
  }
  objeto[a[i]] = b[i];
}
return objeto
}

console.log(arrayObjeto(["a", "b", "c", "d", "e",],[1, 2, 3, 4, 5, 6]));
