import fetch from "node-fetch";

const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

export {products};

/*
El await nos ayuda a que se espere a que llegue la información del servidor, en este caso la respuesta de los productos, luego transforma a un objeto que yo pueda utilizar y muestralos.
Si lo quitamos, da un error.
*/