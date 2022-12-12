try {
    hello();
} catch (error) {
    console.log(error);
}

//En es10 se puede añadir un comentario al error

try {
    hello();
} catch {
    console.log('No esta definido la función');
}