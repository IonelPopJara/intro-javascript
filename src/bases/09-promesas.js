import {getHeroById } from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         //Tarea
//         //Importar el getHeroeById(2);
//         //console.log('2 segundos después');
//         const p1 = getHeroById(2);
//         resolve(p1);
//         //reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('Then de la promesa', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const p1 = getHeroById(id);
            if(p1) resolve(p1);
            else reject('No se pudo encontrar el heroe');
        }, 2000);
    });
}

getHeroeByIdAsync(5)
.then(console.log)
.catch( console.warn );