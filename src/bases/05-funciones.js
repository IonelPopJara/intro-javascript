//Funciones en JS

// const saludar = function(nombre)
// {
//     return `Hola ${nombre}!`;
// }

// const saludar2 = (nombre) => {
//     return `Hola ${nombre}!`;
// }

const saludar3 = (nombre) => `Hola ${nombre}${nombre}!`;

const saludar4 = () => `Holas!`;

//console.log(saludar('Mults'));
console.log(saludar3('Mults'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ZXC123',
    username: 'Shiroyasha'
});

const user = getUser();
console.log(user);

//Tarea
//1. Transformar a una funcion de flecha (Listo)
//2. Retornar un objeto implicito
//3. Pruebas
const getUsuarioActivo = (nombre) => ({
    uid: 'AWRJ230',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo('Zura');
console.log(usuarioActivo);