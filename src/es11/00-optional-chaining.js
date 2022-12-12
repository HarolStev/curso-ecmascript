const users = {
    hsgq: {
        country : 'CO'
    },
    Valen: {
        country: 'CA'
    }
}

console.log(users?. beloper?. country);

/*
No abuses del encadenamiento opcional
🔗 El encadenamiento opcional se debe utilizar únicamente cuando probablemente un valor no exista.
.
Por ejemplo, en un objeto 'usuario' que siempre existe, pero la propiedad 'redes' es opcional, entonces se debería escribir 'usuario.redes?.facebook' y no 'usuario?.redes?.facebook'.
.
Si abusas del encadenamiento opcional y existe un error en un objeto, el programa podría “ocultarlo” por un undefined, provocando que el debugging sea más complicado.
*/