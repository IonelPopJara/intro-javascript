const persona = {
    nombre: 'Gintoki',
    apellido: 'Sakata',
    edad: 20,
    direccion: {
        ciudad: 'Edo',
        distrito: 'Kabuki'
    }
};

//Usar ... para crear un objeto nuevo y no alterar el anterior
const persona2 = {...persona};
persona2.nombre = 'Katsura';

console.log(persona);
//console.table(persona);
console.log(persona2);