const nombre = 'Mults';
const apellido = 'Mesco';

const nombreCompleto = `${nombre} ${apellido}`;

function getGreetings(nombre)
{
    return 'Hola ' + nombre + '!!!';
}

console.log(nombreCompleto);

console.log(`Esto es un texto: ${getGreetings(nombreCompleto)}`);