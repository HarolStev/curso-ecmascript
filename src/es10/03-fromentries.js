//pasar de un array a un objeto

const entries = new Map([["name", "Valentina"], ["age",1]]);

console.log(entries);
console.log(Object.fromEntries(entries));