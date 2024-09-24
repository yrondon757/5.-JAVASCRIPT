// ------------------- SECCION 3 de JAVASCRIPT --------------------

// FUNCIONES

function miFuncion(saludo){
    console.log(saludo);
}

let miArray = ["Telefono","Televisores"];

miFuncion("Buenos Dias...");
miFuncion(miArray);



// ---------- FUNCION ANONIMA
/*
Son funciones que no tienen un nombre definido o identificacion. En lugar de ser nombrado se definen directamente en el lugar donde se necesitan. Son utiles en varias situaciones (Funciones Callbacks).
*/

let suma = function(num1,num2){
    return num1 + num2;
}

let resultado = suma(40,2);
console.log(resultado);



// ------------ FUNCION FLECHA (arrow functions)
/*
Son una caracteristica introducida en (ES6) que proporciona una forma mas concreta y limpia de definir funciones.

SINTAXIS BASICA

let nombreFuncion = (parametros) => expresion [ console.log() ]

*/

// Funcion flecha sin parametros
let saludar = () => {
    console.log("Hola desde una arrow function.");
}

saludar();

// Funcion flecha con parametros
let duplicar = (numero) => {
    return numero * 2;
}

console.log(duplicar(5));

// Funcion flecha con varios parametros
let resta = (num1,num2) => {
    return num1 - num2;
}

console.log(resta(5,3));

// Funcion flecha con una sola expresion sin return explicito
// (SOLO SI TIENEN UNA SOLA EXPRESION PUEDE OMITIR LAS LLAVES Y EL RETURN)
let cuadrado = (numero) => numero * numero; // (numero) => { return numero * numero};
console.log(cuadrado(5));

let cuadrado2 = (numero1,numero2) => numero1 * numero2; // (numero1,numero2) => { return numero1 * numero2 };
console.log(cuadrado2(5,7));

// Funcion con argumentos de otra funcion (callback)
/*
Las funciones flechas son utiles para pasar funciones como argumentos a otras funciones, como el caso de : filter y map

Metodo map : Esta funcion se utiliza para transformar cada elemento de un array en un nuevo elemento y luego devuelve un nuevo array con estos valores de cada uno de los elementos transformados.
*/
let numeros = [1,2,3,4,5];
let cuadrados = numeros.map((numero) => numero * 2);

console.log(numeros);
console.log(cuadrados);

// ------------- CALLBACK
// FUNCION QUE TOMA UN ARRAY Y UNA FUNCION CALLBACK, Y VAMOS A APLICAR EL CALLBACK A CADA ELEMENTO DEL ARRAY
// Este ejemplo es de como se hace la funcion de forma manual por asi decirlo. Esto se puede hacer con map de manera mas rapida y eficaz.
function procesarArray(array, callback){
    let resultado = []; // [2,4,6,8]

    for(let i = 0; i < array.length; i++){
        resultado.push(callback(array[i])) // (1) => 1 * 2 ---->
    };

    return resultado;
}

let nums = [1,2,3,4];
let duplicado = procesarArray(nums, (numero) => numero * 2);

console.log(duplicado);

// Funciones flechas con objetos y metodos
// this no funciona en las funciones flecha dentro del metodo, mientras que las funciones anonimas si.
let persona = {
    nombre: "Yenetson",
    saludar: () => {
        console.log(`Hola ${this.nombre}`);
    }
}

let persona2 = {
    nombre: "Jose",
    saludar: function(){
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar();
persona2.saludar();




// --------------------------------------- DOM (DOCUMENT OBJECT MODEL)
// dom?
/*
El DOM es una representacion del documento HTML en forma de arbol, el cual se puede manipular con Javascript. Podemos usar el DOM  para interactuar con el contenido y la estructura de una pagina web.
*/

// ---------------- ACCEDER A LOS ELEMENTOS DEL DOM
// Podemos acceder a los elementos del DOM utilizando metodos y propiedades de Javascript. Por ejemplo.
// Nosotros vamos a poder acceder a un elemento por su ID, etiqueta o tambien por su clase.

// ---------- ACCEDER A TRAVES DEL ID
// ----> getElementById
const titulo = document.getElementById("miTitulo");
console.log(titulo);

// ---------- ACCEDER A TRAVES DE CLASES
// ----> getElementsByClassName
const parrafos = document.getElementsByClassName("miClase"); // es una Coleccion de HTML es decir un array
console.log(parrafos[1]);
for(let i = 0; i < parrafos.length; i++){
    console.log(parrafos[i]);
}

// -------------- ACCEDER A TRAVES DE LOS NOMBRE DE ETIQUETA (TAGNAME)
// ----> getElementsByName
const tagnames = document.getElementsByTagName("a");
console.log(tagnames[1]);

//------------------------- PROPIEDADES
// --------- INNER HTML ----> Podemos usar esta propiedad innerhtml para cambiar o acceder al contenido html interno de un elemento(.innerhtml);
let elemento = document.getElementById("principal");
elemento.innerHTML = "<h2>Nuevo parrafo :D</h2> <button>Soy un boton</button>";
console.log(elemento.innerHTML);
console.log(elemento);

// -------- TEXT CONTENT ----> Permite acceder al contenido del texto de un elemento, pero tambien podemos cambiarlo (.textContent);
let seleccion = document.getElementsByTagName("h2");
seleccion[0].textContent = "Esto es nuevo :)"; // Es para modificar el valor de la etiqueta
console.log(seleccion[0].textContent);

// -------- CLASS LIST ----> Nos permite agregar, eliminar a cambiar clases de CSS en un elemento

// --- AGREGAR
seleccion[0].classList.add("text-red-400", "font-bold");

// --- ELIMINAR
seleccion[0].classList.remove("text-red-400");

// --- TOGGLE ----> SWITCH (INTERRUPTOR)
seleccion[0].classList.toggle("text-blue-400"); // Agrega la clase
seleccion[0].classList.toggle("text-blue-400"); // Quita la clase
seleccion[0].classList.toggle("text-blue-400"); // Agrego la clase

// --------- CLASSNAME
// seleccion[0].className + " text-[40px]";
seleccion[0].className += " text-[40px]"; // Para consevar las propiedades anteriores se coloca += sino se reemplazaran por los nuevos. Con += los agrega con las propiedades anteriores.
console.log(seleccion[0].className);

// --------- STYLE ----> Podemos acceder a la propiedad style de un elemento para cambiar los estilos CSS directamente
seleccion[0].style.backgroundColor = "black";
seleccion[0].style.textAlign = "center";

// --------- CREATE ELEMENT // APPEND CHILD
const nuevoElemento = document.createElement("p"); // <p></p>
nuevoElemento.textContent = "Nuevo parrafo desde Javascript.";
elemento.appendChild(nuevoElemento); // Agregamos este nuevo elemento a un elemento que este en el HTML, en este caso el Div con el id "principal"

// ---------- REMOVER CHILD

