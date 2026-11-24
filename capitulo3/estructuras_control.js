"use strict";
/* if - else */
// Validar si un número es par o impar
let edad = 35;
if (edad % 2 === 0) {
    console.log(`${edad} es par`);
}
else {
    console.log(`${edad} es impar`);
}
let mes = "enero";
switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
        console.log(`${mes} tiene 31 dias`);
        break;
    case "abril":
    case "junio":
        console.log(`${mes} tiene 30 dias`);
        break;
    case "febrero":
        console.log(`${mes} tiene 28 y cada 4 años 29`);
        break;
    default:
        console.log(`${mes} no existe !!!`);
}
