/* 
variables
variables mutables; cambian de valos 
variables unmutables : no cambian de valor */

// variable mutable
let nombre: string="romelia";
nombre= "nuevo nombre";
// inmutable
const PI:number=3.1416;
// no se puede PI= 2.66;



//any
let valor:any =true;

//interpolacion de cadenas
let mensaje: string =`holaa ${nombre}, PI ${PI}`;

console.log(mensaje);
