//Desestructuracion
//Asignacion Desestructurante

const personajes = ['Gintoki', 'Katsura', 'Sakamoto'];

const [, PJ2, ,] = personajes;

console.log(PJ2);

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. El primer valor del arr se llamara nombre
//2. El segundo valor se llamara setNombre
const useState = (valor) => {
    return [valor, ()=>{console.log(`Hello There ${valor}`)}];
}

const [nombre, setNombre] = useState('Gintoki');

setNombre();