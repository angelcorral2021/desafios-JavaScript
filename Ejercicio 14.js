/* Escriba una funcion que reciba un array de objetos, siendo cada objeto una direccion separado en address, city,state, country y zipcode
retorne esa direccion formateada en un nuevo array stringsiguiendo el siguiente formato:
"address,city-state, zipcode,country."*/



function unionObjetos(a) {
    const country = a
  
  const valores1 = Object.values(country[0]);
  let union1 = valores1[1] + "-" + valores1[2];
  valores1[1] = union1;
  valores1.splice(2, 1);
  const nuevoValor1 = valores1.join(",");
  

  const valores2 = Object.values(country[1]);
  let union2 = valores2[1] + "-" + valores2[2];
  valores2[1] = union1;
  valores2.splice(2, 1);
  const nuevoValor2 = valores2.join(",");
  
  const valores3 = Object.values(country[2]);
  let union3 = valores2[1] + "-" + valores2[2];
  valores3[1] = union3;
  valores3.splice(2, 1);
  const nuevoValor3 = valores3.join(",");
  
  const nuevoArray = [nuevoValor1, nuevoValor2, nuevoValor3];

  
  return nuevoArray;
}

console.log(
  unionObjetos([
    {
      address: "Av.Compenche",
      city: "Florianopolis",
      state: "sp",
      zipcode: "88063-301",
      country: "Brazil",
    },
    {
      address: "Av.Siempre",
      city: "Floridor",
      state: "sl",
      zipcode: "88045-301",
      country: "Brazil",
    },
    {
      address: "Av.Cucuta",
      city: "Flora",
      state: "sp",
      zipcode: "88555-301",
      country: "Brazil",
    },
  ])
);
