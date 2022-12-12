
/* En alguna situación necesitarás manejar varias promesas y obtener sus resultados. ¿Cómo? Utilizando los métodos Promise.all y Promise.allSettled.

Promise.all
El método Promise.all sirve para manejar varias promesas al mismo tiempo. Recibe como argumento un array de promesas.

Promise.all([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))

El problema es que Promise.all() se resolverá, si y solo si todas las promesas fueron resueltas. Si al menos una promesa es rechazada, Promise.all será rechazada.

Promise.allSettled
Promise.allSettled() permite manejar varias promesas, que devolverá un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada.

const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.resolve("Promesa 2")
const promesa3 = Promise.reject("Ups promesa 3 falló")

Promise.allSettled([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta))

// [
    {
        status: 'rejected',
        reason: 'Ups promesa 1 falló'
    },
    { status: 'fulfilled', value: 'Promesa 2' },
    {
        status: 'rejected',
        reason: 'Ups promesa 3 falló'
    }
] //

¿Debería usar Promise.allSettled en lugar de Promise.all? No, porque ambas son muy útiles dependiendo cómo quieras manejar tus promesas.

Por si alguien más tenía la duda.

“resolve” y “reject” no son palabras reservadas (pero sí comúnmente usadas en la sintaxis de una promesa. Se puede usar cualquier nombre como:

    new Promise((simon, nel ) => (true) ? simon() : nel())

*/

const promise = new Promise((resolve, reject) => reject("Reject"));
const promise1 =  new Promise((resolve, reject) => resolve("Resolve"));
const promise2 = new Promise((reject, resolve) => resolve("Resolve2"));

Promise.allSettled([promise, promise1, promise2])
    .then(Response => console.log(Response));
