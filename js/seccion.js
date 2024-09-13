// console.log('Hola desde el archivo externo');
// ESTO ES UN COMENTARIO DE UNA LINEA
/*

ESTO TAMBIEN ES UN COMENTARIO
PERO
DE
VARIAS
LINEAS

*/

/* SECCION 1 */

// ------- VARIABLES : Es un espacio en la memoria, y en Javascript hay 3 tipos de variables

//Variable Global
var variableGlobal = "Hola "; // Es una variable que se puede acceder desde cualquier parte del codigo

// Variable Local
let variableLocal ="Como estas"; // Solo se puede acceder desde la funcion o bloque de codigo

// Variable Constante
const variableConstante ="tu?"; // Es una variable que no se puede cambiar su valor (No se puede reasignar su valor)
const PI = 3.1416;

console.log(variableGlobal);
console.log(variableLocal);
console.log(variableConstante);
console.log(PI);

console.log(variableGlobal + variableLocal + " " + variableConstante + " ----> " + PI);

console.log(variableGlobal)
variableGlobal = "Hello"; //Reasignando un valor a la variable GLOBAL.
console.log(variableGlobal);

console.log(variableLocal);
variableLocal = "Como sigues"; //Reasignando un valor a la variable LOCAL.
console.log(variableLocal);

console.log(variableConstante);
//variableConstante = "you?"; //Reasignando un valor a la variable CONSTANTE (WARNING)!! NO SE DEBE HACER...!
console.log(variableConstante);