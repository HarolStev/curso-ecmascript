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

/*
try {
  // Manejar el código
} catch (err) {
  // Se utiliza el parámetro `err`
}

try {
  // Manejar el código
} catch {
  // Manejar el error sin el parámetro.
}
*/