import hello from "./module.mjs";

hello();

/*puedes evitar la configuración del JSON usando la extención .mjs, esta le indica a JavaScript que es un módulo
    La configuración en JSON es colocarle después de 
    "license": "MIT",
    "type" : "module"

    Y ahí si se podria colocar la extención .js

*/

import { getData } from "./module.mjs";

export function solution() {
    return getData().then(list => list);
}