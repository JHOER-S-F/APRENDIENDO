//personaje de tv

let nombre = 'Tanjiro';
let anime = 'demon slayer';
let edad = 16;

// odgetos con sus propiedades
let personage = {

  //llave  //valor
    nombre:'tanjiro',  //completo se define como propiedad
    anime:'demon slayer',
    edad: 16,

};
console.log(personage);
console.log(personage.anime);
console.log(personage['nombre'])

//modificar las propiedades del odgeto
personage.edad = 13;
personage['anime'] = 16;

//eliminar una propiedad del objeto
delete personage.anime;

console.log(personage);
