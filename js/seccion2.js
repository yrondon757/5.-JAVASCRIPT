/* SECCION 2 DE JAVASCRIPT */

// ------------------ FUNCIONES EN JAVASCRIPT
/*
Son bloques de codigo que nos permiten ejecutar una serie de instrucciones en base a un nombre y parametros que le pasemos (Ademas, se puede reutilizar).
*/

// ------- FUNCIONES SIN PARAMETRO
function saludar(){
    console.log("Hola, buenas noches");
}

// Llamamos a la funcion
saludar();

if(false){
    saludar();
}

// --------- FUNCIONES CON PARAMETRO
function saludarParametros(saludo){
    console.log(saludo);
}

// Llamamos a la funcion y le pasamos un valor (argumento)
saludarParametros("Buenas noches");
saludarParametros("Buenas dias");

// --------- Otro Ejemplo
function multiplicar(numero1, numero2){
    console.log(numero1 * numero2);
}

// Llamamos a la funcion y le pasamos los argumentos (numeros)
multiplicar(2,4);
multiplicar(8,2);

// ---------- Otro Ejemplo
/* function makeSaludo(nombre = "Jose", apellido = "Perez", edad = 22){
    console.log("Hola, " + nombre + " " + apellido + " " + edad);
}

// Llamar a la funcion
makeSaludo("Yenetson", "Rondon", 32); */

function makeSaludo(nombre = null, apellido = null, edad = null){
    if(nombre === null || apellido === null){
        console.log("Hola desconocido!")
    }else{
        console.log("Hola " + nombre + " " + apellido);
    }
}

// Llamar a la funcion
makeSaludo("Yenetson", "Rondon");


// ------- FUNCIONES CON RETORNO
function sumar(num1, num2){
    return num1 + num2;
}

console.log(sumar(20,10));

// ----- Otro Ejemplo
function mayorDeEdad(edad){
    if(edad >= 18){
        return true;
    }else{
        return false; 
    }
};

console.log(mayorDeEdad (17))

if(mayorDeEdad (18)){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}


// ------ FUNCION DENTRO DE UNA FUNCION
function permisos(edadUsuario){
    if(mayorDeEdad(edadUsuario)){
        console.log("Puedes ingresar!");
    }else{
        console.log("No puedes ingresar!");
    }
};

permisos(20);


// ----- FUNCIONES RECURSIVA
function recursiva(num){
    console.log(num);
    if(num >= 10){
        return;
    }

    recursiva(num + 1);
}

recursiva(1);


// FUNCION QUE ME PERMITA CALCULAR EL AREA DE UN RECTANGULO!
function calcularAreaRectangulo(ancho,altura){
    return ancho * altura;
}

console.log(calcularAreaRectangulo(20,30));


// ------ HOISTING : Es un comportamiento en Js en la cual las declaraciones de variables y funciones, se mueven al inicio de su contexto de ejecucion durante la fase de compilacion.

// Ejemplo con la variable VAR
// La declaracion VAR de "X" es elevada al principio del contexto pero no la asignacion.
console.log(x); // Undefined
var x = 5;
console.log(x); // 5

// Ejemplo con las variables Let y Const
// Las variables declaradas con Let y Const tambien se elevan pero no se inicializan. Por ende al intentar acceder a ellas antes que su declaracion produce un error de referencia.
// console.log(y); // Nos genera un error de inicializacion
let y = 10;
console.log(y); // 10

// EJEMPLO CON FUNCIONES.
// Las declaraciones de funciones completas son elevadas tanto con el nombre como su implementacion, por lo que puede ser llamada antes de ser declarada.
ejemplo();

function ejemplo(){
    console.log("Hola Mundo");
};

ejemplo();


// Scope : Es el alcance de las variables.
var nombre = "Yenetson";
let apellido = "Rondon";

let profesion;

if(true){
    console.log(nombre + " " + apellido);
    var edad = 32;
    profesion = "Programador";
    const PI = 3.14;
};

console.log("Tu edad es :" + edad);
console.log("Tu profesion es : " + profesion);
// console.log("PI es igual a = " + PI);


// EJERCICIOS

// - Crear una funcion que reciba como parametro un numero y que retorne verdadero si es par y falso si es impar.

// - Crear una funcion que reciba como parametro 2 numeros y un operador (+, -, *, /) y que retorne el resultado de la operacion entre los dos numeros.


// 1er Ejercicio
function numeroParImpar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
};

console.log(numeroParImpar(32));


// 2do Ejercicio
function calculadora(num1, num2, operador = "+"){
    if(operador === "+"){
        return num1 + num2;
    }else if(operador === "-"){
        return num1 - num2;
    }else if(operador === "*"){
        return num1 * num2;
    }else if(operador === "/"){
        return num1 / num2;
    }else{
        return "Ingresa uno de estos signos (+, -, *, /0";
    }
};

console.log(calculadora(5, 5, "+"));
