//Desestructuracion
//Asignacion Desestructurante

const persona = {
    nombre: 'Katsura Kotarou',
    edad: 26,
    clave: 'ZuraJanaiKatsuraDa!',
    //rango: 'Joi Shishi'
};

//Sin asignar un nuevo nombre a la variable desestructurada
// const {edad, nombre, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// //Asignando un nuevo nombre a la variable desestructurada
// const {nombre:nombre2} = persona;

// console.log(nombre2);

// // console.log(persona.nombre);
// // console.log(persona.edad);
// // console.log(persona.clave);

const useContext = ({clave, nombre, edad, rango = 'Captain Katsuura'}) => {

    //console.log(`Nombre: ${nombre} | Edad: ${edad} | Rango: ${rango}`);

    return {
        nombreClave: clave,
        age: edad,
        latlng: {
            lat: 23.234,
            lng: -15.523,
        }
    }
}

//Katsura
// const {nombreClave, age, latlng:coordinates} = useContext(persona);
// const {lat, lng} = coordinates;

//One liner
const {nombreClave, age, latlng:{lat,lng}} = useContext(persona);

console.log(nombreClave, age, lat, lng);