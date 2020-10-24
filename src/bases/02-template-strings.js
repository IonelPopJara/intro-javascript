const nombre = 'Mults';
const apellido = 'Mesco';

const nombreCompleto = `${nombre} ${apellido}`;

function getGreetings(nombre)
{
    return 'Oeeee Temeraaaaa! Boku wa ' + nombre + '-sama dakara na!';
}

console.log(nombreCompleto);

console.log(`Esto es un texto: ${getGreetings(nombreCompleto)}`);