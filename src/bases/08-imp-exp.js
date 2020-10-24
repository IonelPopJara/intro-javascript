//import {heroes as importedHeroes, owners} from '../data/heroes';
import {heroes as importedHeroes} from '../data/heroes';

//console.log(owners);

const getHeroById = (id) => (importedHeroes.find(heroe => heroe.id === id));
//const getHeroesByOwner = (owner) => (heroes.find(heroe => heroe.owner === owner).name);

//Filter
const getHeroesByOwner = (owner) => (importedHeroes.filter(heroe => heroe.owner === owner));

//console.log(`Heroe: ${getHeroById(2)}`);
//console.log(`Heroes by Owner: ${getHeroesByOwner('DC')}`);
//console.log(getHeroesByOwner('Marvel'));

//heroes.filter(getHeroesByOwner());

// const inventario = [
//     {nombre: 'manzanas', cantidad: 2},
//     {nombre: 'bananas', cantidad: 0},
// ];

// const resultado = inventario.find(aasd => aasd.nombre === 'bananas');
// const found = heroes.find(heroe => heroe.id === 2)

// console.log(heroes);
// console.log(inventario);
// console.log(resultado.cantidad);
// console.log(`Heroe: ${found.name}`);

export{
    getHeroById,
    getHeroesByOwner,
}