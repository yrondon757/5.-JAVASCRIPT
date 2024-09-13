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

// -------- TIPOS DE DATOS

// String (Cadena de texto 'Hola soy un texto', "Hola soy un texto")
let nombre = "Yenetson";

// Number (Numeno entero, por ejemplo: 10 20 30 40 45 1 2 3 4 90 100 200)
let edad = 32;

// Float (Numero decimal, por ejemplo: 3.1416)
let altura = 1.80;

// Boolean (Boleano o en este caso tambien (True or False) verdadero o falso)
let mayorDeEdad = true; //true //false

// Null (Tipo de dato nulo "null")
let nada = null;

// Undefined (Tipo de dato indefinido)
let indefinido = undefined;

// Array (Lista o arreglo)
// let numeros = [20,30,40,100,50,45.5,"numero"]
let frutas = ["Manzana","Pera","Mango"];
console.log(frutas[0]);
console.log(frutas[2]);
console.log(frutas[3]);
frutas[2] = "Uva";
frutas[3] = "Patilla";
console.log(frutas);
frutas = ["perro","gato"];
console.log(frutas);

//Array con una variable de tipo constante
const arrayConstante = ["Lunes","Martes","Viernes"];
console.log(arrayConstante);
arrayConstante[2] = "Miercoles";
arrayConstante[3] = "Jueves";
// arrayConstante = ["one","two"]; // ESTO NO SE PUEDE HACER CUANDO ES CONSTANTE, CAMBIAR LA LISTA COMPLETA
console.log(arrayConstante);

let numeros = [20,30,40,50,100]
let decimales = [20.5,30.5,100.20,350.4]
let arrays = [["Mouse","Teclado"],["SSD","RAM"],["Monitor","Cornetas"]];

console.log(arrays[2][0]);
console.log(arrays[1][0]);

// Object (Objeto) Tienen propiedad y valor (ejemplo nombre="Yenetson")
// Let persona = {nombre="Yenetson",apellido:"Rondon",materias:["programacion","ingles"]}
let persona = {
    nombre: "Yenetson Jose",
    apellido: "Rondon",
    materias: [
        "Programacion",
        "Ingles",
    ], //Objeto dentro de otro Objeto
    hermana: {
        nombre: "Maria",
        apellido: "Perez"
    }
};
console.log(persona);
console.log(persona["apellido"]);
console.log(persona.materias[0]);
console.log(persona.hermana.apellido); // Objeto dentro de otro Objeto
persona.nombre = "Jose";
console.log(persona);
persona.materias[2] = "Geografia"
persona.materias[1] = "Deporte"
console.log(persona);



// -------- OPERADORES ARITMETICOS
/*
1. + (SUMA) Pero... Este signo tambien concatena! IMPORTANTE
2. - (RESTA)
3. * (MULTIPLICACION)
4. / (DIVISION)
5. % (MODULO DE UNA DIVISION) ----> Es el resto de la division
*/
let ejercicio1 = 10 + 5 + 50;
let ejercicio2 = 50 - 24 -10;
let ejercicio3 = 10 * 9;
let ejercicio4 = 10 / 2;
let ejercicio5 = 10 % 3;
let ejercicio6 = (10 + 5) * 2 / (5 - 3);
let ejercicio7 = 3 + "3" / 2; // Primero se resuelve la divison/multiplicacion luego el resto
let ejercicio8 = 9 + "8"; // El signo + esta concatenando en este caso, numero + texto
let ejercicio9 = "7" * 2;
let ejercicio10 = ("55" + 10) - 12 / "2" * ("5" - 2);
console.log(ejercicio1); // 65
console.log(ejercicio2); // 16
console.log(ejercicio3); // 90
console.log(ejercicio4); // 5
console.log(ejercicio5); // 1
console.log(ejercicio6); // 15
console.log(ejercicio7); // 4.5
console.log(ejercicio8); // 98
console.log(ejercicio9); // 14
console.log(ejercicio10); // 5492



// ---------- OPERADORES DE COMPARACION
/*
1. == (Igual a...) 2 == 2 (True), 30 == 29 (False), 100 == 10 (True), "2" == 2 (Comparada el valor, no el tipo de dato)
2. === (Igual valor Igual tipo) -----> "2" === 2 (False), "5" === "5" (True), "6" === "7" (False)
3. != (Valor no igual, distinto) ----> 3 != 2 (True), 5 != 5 (False), "8" != 8 (False)
4. !== (Valor distinto, tipo distinto) ----> 3 !== "3" (true), 10 !== 12 (true)
5. > (Mayor que...) ---> 10 > 12 (False), 25 > 23 (True)
6. < (Menor que...) 8 < 2 (False), 7 < 10 (True)
7. >= (Mayor o igual que...) ---> 18 >= 19 (False), 17 >= 17 (True) 10 >= 2 (True)
8. <= (Menor o igual que...) ---> 32 <= 40 (True), 90 <= 100 (True) 
*/ 

console.log (2 == 2); // True
console.log (3 == "3"); // True
console.log ("Yenetson" == "yenetson"); // False

console.log (2 === 2); // True
console.log("7" === 7), // False

console.log(3 != 5); // True
console.log(6 != 6); // False
console.log("hola" != "hola"); // False

console.log("3" !== 5); // True
console.log(5 !== "5"); // True

console.log(10 > 12); // False
console.log(12 > 6); // True
console.log(20 > 20); // False

console.log(8 < 9); // True
console.log(90 < 80); // False

console.log(18 >= 17); // True
console.log(20 >= 20); // True

console.log(19 <= 17); // False
console.log(29 <= 30); // True

console.log((10 * 5) >= 80); // False
console.log((5 - 2) != 3); // False
console.log((5 + "8") - (10 / 2) >= 16); // True
console.log((2 * 2 + "5") > (6 % 2) - (5 - 3)); // True



// --------- OPERADORES DE ASIGNACION
/*
1. = (ASIGNACION)
2. += (INCREMENTAR)
3. -= (DECREMENTAR)
4. *= (MULTIPLICACION)
5. /= (DIVISION)
6. %= (MODULO)
*/

let num = 15;
num += 5; // numero = numero + 5 
num -= 5; // numero = numero - 5
num *= 5; // numero = numero * 5
num /= 5; // numero = numero / 5
num %= 2; // numero = numero % 2
console.log(num);

// ------------ OPERADORES LOGICOS
/*
1. && (AND) ---> TODAS LAS CONDICIONES DEBEN SER VERDADERAS
ej: ---> (2 == 2 && 3 == 3) = True ---> (3 == 2 && 9 == 9) = False

2. || (OR) ---> AL MENOS UNA CONDICION DEBE SER VERDADERA
EJ: ---> (3 == 3 || 2 == 9) = True

3. ! (NOT, NEGACION)
ej: ---> (!true && !false) = false
*/

console.log(true && true); // True
console.log(false && false); // False
console.log(true && false); // False

console.log(true || true); // true
console.log(false || true); // true
console.log(!false); // True
console.log(!true); // False
console.log(!0); // True
console.log(!1); // False

let ejercicio11 = (5 === 5) || (!true); // True
let ejercicio12 = (!0) || (5 < 0); // True
let ejercicio13 = (3 > 4) && (!0); // False
console.log(ejercicio11);
console.log(ejercicio12);



// ------------------- CONDICIONALES
/*
Son estructuras de control que nos permiten evaluar si una expresion es verdadera o falsa, y ejecutar un codigo en base al resultado de esa evaluacion. IF, ELSE, ELSE IF
*/

let fiesta = true;
if(fiesta){
    console.log("SIIIII, vamos a la fiesta!")
}else{
    console.log("No podermos salir a la fiesta :c")
}

if(5 === 5){
    console.log("Si, 5 es exactamente igual a 5")
}else{
    console.log("5 no es exactamente igual a 5 :c")
}

if(10 > 12){
    console.log("IF")
}else if(9 < 8){
    console.log("ELSE IF")
}else if("texto" == "texto"){
    console.log("ELSE IF 2")
}else{
    console.log("ELSE");
}


// ----------- EJEMPLO
let dinero = true;
let tiempo = false;
let humor = false;

if(dinero && tiempo && humor){
    console.log("Vamos al Cine");
}else if(dinero && tiempo){
    console.log("Vamos al Cine 2")
}else{
    console.log("No vamos al Cine")
}



// OPERADOR TERNARIO: ?

// condicion ? bloque de codigo que se ejecuta si la condicion es verdadera : bloque de codigo que se ejecuta si la condicion es falsa

let operadorTernario = 9 > 1 ? "Yenetson" : "Jose";
console.log(operadorTernario);



// ------- PROMPT()
let correo = prompt("Ingresa tu correo electronico: ")
let clave = prompt("Ingresa tu contraseña: ")

if(correo == "yenetson@gmail.com"){
    if(clave == "123"){
        alert("Iniciaste sesion");   
    }else{
        alert("Contrasena incorrecta");
    }
}else{
    alert("El correo no esta registrado");
}

// Si queremos convertir la entrada de prompt de string a numero entero, debemos utilizar parseInt()
// Si queremos convertir la entrada de prompt de string a numero decimal, debemos utilizar parseFloat()

let numero1 = parseInt(prompt("Ingresa un numero"));
let numero2 = parseInt(prompt("Ingresa el otro numero"));
alert(numero1 + numero2);