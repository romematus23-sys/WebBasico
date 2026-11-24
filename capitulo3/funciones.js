"use strict";
/*
funciones
funciones que retornan valor
 funciones que no retornan valor
 */
// no retorna valor
function factorial(dato) {
    let resultado = 1;
    for (let i = dato; i > 0; i--) {
        resultado = resultado * i;
    }
    console.log(`${dato}!=${resultado}`);
}
// invocar metodo
factorial(5);
factorial(4);
factorial(3);
// metodo que si retorna valor 
function suma(numeros) {
    let resultado = 0;
    for (let i of numeros) {
        resultado = resultado + i;
    }
    return resultado;
}
let operacion1 = suma([3, 4, 5]);
let operacion2 = suma([4, 5, 8]);
console.log(`operacion1:${operacion1}`);
console.log(`operacion2:${operacion2}`);
console.log(`operacion1+ operacion2:${operacion1 + operacion2}`);
