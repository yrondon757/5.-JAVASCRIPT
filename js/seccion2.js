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





// ------------------ METODOS DE STRING : METODOS DE UNA CADENA DE TEXTO

let carro = "La ferrari";
console.log(carro[3]); // Imprime la posicion del texto. La F correponde a la posicion 3.

// Length (Longitud de una cadena de texto)
console.log(carro.length); // Imprime todos los espacios del texto, es decir, "La ferrari" tiene 10 espacios.

// indexof (Buscar la posicion de un caracter o palabra)
console.log(carro.indexOf("r"));

// slice (Nos permite extraer una parte de la cadena de texto)
console.log(carro.slice(5)); // A partir de la posicion 5 que indicamos, imprimira "rrari"
console.log(carro.slice(3,5)); // Imprime desde la posicion 3 a la 5, "fe" es lo que imprimira

//trim (Nos permite quitar espacios en blanco)
let carro2 = "   Ford Mustang   ";
console.log(carro2);
console.log(carro2.trim());

// split (Nos permite convertir un string a un array)
let texto = "Hola Mundo"; // ["H","o","l","a"]  ["Hola", "Mundo"]
let texto2 = "Jose-Daniel";
let texto3 = "Yenetson-Jose-Rondon";
console.log(texto.split(" "));
console.log(texto2.split("-"));
console.log(texto3.split("-"));
console.log(texto3.split(""));

// replace (Nos permite reemplazar una parte de la cadena)
let texto4 = "Me gusta Python";
console.log(texto4.replace("Python", "Javascript"));

// toUpperCase (Nos permite convertir la cadena de texto a mayusculas)
console.log(texto4.toUpperCase());

// toLowerCase (Nos permite convertir la cadena de texto a minusculas)
console.log(texto4.toLowerCase());


// EJERCICIO
/*

Segun el siguiente STRING
"La vida es como andar en bicicleta, para mantener el equilibrio debes seguir adelante."

1. Encontrar la posicion de la palabra "equilibrio".
2. Encontrar la posicion de la palabra "bicicleta".
3. Encontrar la posicion de la palabra "hola".
4. Transformar el string en un array, separando por espacios.
5. Transformar el string en mayusculas.
6. Reemplazar la primera ocurrencia de "o" por "a".
7. Concatenar a la frase siguiente: "- Albert Einstein".

*/

// 1
let palabra = "La vida es como andar en bicicleta, para mantener el equilibrio debes seguir adelante.";
console.log(palabra.indexOf("equilibrio"));

// 2
console.log(palabra.indexOf("bicicleta"));

//3
console.log(palabra.indexOf("hola"));

//4
console.log(palabra.split(" "));

//5
console.log(palabra.toUpperCase());

//6
// console.log(palabra.replace("o", "a")); // Reemplaza la primera "o" del texto.
console.log(palabra.replaceAll("o", "a")); // Reemplaza todas las "o" del texto.

//7
console.log(palabra + " - Albert Einstein");




// ----------------- METODOS DE ARRAY

let car1 = "Mustang";
let car2 = "Supra";
let car3 = "Corvette";

let cars = ["Mustang", "Supra", "Corvette"];
console.log(cars[2]);

// ------------------

let frutas = ["Manzana", "Pera", "Banana", "Aguacate", "Kiwi"];

// Length (Longitud del array)
console.log(frutas.length); // Nos cuenta cada uno de los elementos, en este caso son "5" elementos.

// Push (Nos permite agregar un elemento al final del array)
frutas.push("Naranja"); // Se pueden agregar varios elementos
console.log(frutas);

// UNSHIFT (Nos permite agragar un elemento al principio del array)
frutas.unshift("Pina");
console.log(frutas);

// POP (Nos permite quitar un elemento al final del array)
frutas.pop();
console.log(frutas);

// SHIFT (Nos perrmite quitar un elemento al principio del array)
frutas.shift();
console.log(frutas);

// INDEXOF (Nos permite encontrar la posicion de un elemento)
console.log(frutas.indexOf("Kiwi")); // Al buscar un elemento que no existe, nos devuelve "-1"

// Splice (Elimina un elemento del array o elementos), retorna el elemento eliminado
// (posicion, cantidad de elementos a eliminar a partir de esa posicion)
let elementoEliminado = frutas.splice(1,2);
console.log(elementoEliminado);
console.log(frutas);

// Slice (Extrae parte del array)
console.log(frutas.slice(1,3));

// SORT (Ordena un array. De la A a la Z)
console.log(frutas.sort());

// REVERSE (Invierte el orden del array. De la Z a la A
console.log(frutas.reverse());

// JOIN (Convertir un array a string)
// console.log(frutas.join(" - "));
// console.log(frutas.join(" "));
console.log(frutas.join(" / ")); // Separa los elementos del array con " / "

// filter e includes (Nos permite filtrar)
let correos = [
    "juan@gmail.com",
    "carlos@hotmail.com",
    "raul@yahoo.com",
    "yenetson@hotmail.com",
    "maria@gmail.com"
];

let correos_hotmail = correos.filter(
    function (correo){ // La funcion puede tener cualquier nombre. El parametro correo va a tomar cada elemento del array. correo = "juan@gmail.com"
        return correo.includes("hotmail"); // Si cumple, nos retorna (true) y si no cumple es (false)
    }
);

console.log(correos_hotmail);