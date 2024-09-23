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


// Filtrar solo los numeros pares
let numeros_array = [1,2,3,4,5,6,7,8,9,10,11,12];
let numeros_pares = numeros_array.filter(
    function (numero){
        return numero % 2 === 0;
    }
);

console.log(numeros_pares);



// EJERCICIO
/*
Dado el siguiente array de ciudades = ["Paris". "Marsella","Lyon","Touluose","Niza"]

1. Agregar 2 ciudades mas al final del array.
2. Encontrar la posicion de la ciudad de "Niza".
3. Eliminar la ciudad de "Niza".
4. Agregar la ciudad de "Burdeos" al principio del array.
5. Encontrar la posicion de la ciudad de "Burdeos".
6. Encontrar todas las ciudades que tengan la letra "M".
7. Encontrar todas las ciudades que contengan la letra "P" o "N".
8. Encontrar todas las ciudades que contengan mas de 6 letras.
9. Encontrar todas las ciudades que contengan menos de 6 letras.
*/

let ciudades = [
    "Paris",
    "Marsella",
    "Lyon",
    "Toulouse",
    "Niza",
];

//1
ciudades.push("Lille", "Nantes");
console.log(ciudades);

//2
console.log(ciudades.indexOf("Niza"));

//3
ciudades.splice(4,1);
console.log(ciudades);

//4
ciudades.unshift("Burdeos");
console.log(ciudades);

//5
console.log(ciudades.indexOf("Burdeos"));

//6
let ciudadesConM = ciudades.filter(
    function(ciudad){
        return ciudad.includes("M");
    }
);

console.log(ciudadesConM);

//7
let ciudadesConPoN = ciudades.filter(
    function (ciudad){
        return ciudad.includes("P") || ciudad.includes("N");
    }
);

console.log(ciudadesConPoN);

//8
let ciudadesSeisLetras = ciudades.filter(
    function (ciudad){
        return ciudad.length >= 6;
    }
);

console.log(ciudadesSeisLetras);

//9
let ciudadesMenosSeisLetras = ciudades.filter(
    function (ciudad){
        return ciudad.length < 6;
    }
);

console.log(ciudadesMenosSeisLetras);



// -------------------- OBJETOS Y METODOS (PROGRAMACION ORIENTADA A OBJETOS (POO))

let auto = {
    marca: "Ford",
    modelo: "Fiesta",
    anno: 2020,
    color: "negro",
    encender: function(){ // Metodo
        console.log("El carro esta encendido");
    }
};

console.log(auto);
console.log(auto.color);
auto.encender();

// Vamos a crear un objeto que represente un libro
let libro = {
    titulo: "Aprendiendo Javascript",
    autor: "Jose",
    genero: "Programacion",
    paginas: 500,
    disponible: 5,
    prestar: function(){
        if(this.disponible > 0){ // THIS (Permite tomar una propiedad del objeto)
            this.disponible -= 1;
            console.log("El libro ha sido prestado - Disponible: " + this.disponible);
        }else{
            console.log("No hay libros disponibles!");
        }
    },
    devolver: function(){
        if(this.disponible < 5){
            this.disponible += 1;
            console.log("El libro ha sido devuelto - Disponible: " + this.disponible);
        }else{
            console.log("Los libros ya han sido devueltos!");
        }
    }
};

console.log(libro);
libro.prestar(); // Prestamos el libro una vez
libro.prestar(); // Prestamos el libro una 2da vez
libro.prestar();
libro.prestar();
libro.prestar();
libro.prestar();

// Devolver el libro
libro.devolver();
libro.devolver();
libro.devolver();
libro.devolver();
libro.devolver();
libro.devolver();
console.log(libro);




// ------------------------ FUNCIONES CONSTRUCTORAS
let juego1 = {plataforma: "xbox", nombre: "GTA V", creador: "Rockstar Games"};
let juego2 = {plataforma: "ps4", nombre: "GOW", creador: "Santa Monica Studio"};

function Juego(plataforma, nombre, creador){ // La primera letra del nombre de la funcion debe ir en mayuscula
    this.plataforma = plataforma;
    this.nombre = nombre;
    this.creador = creador;

    this.mostrarInformacion = function(){
        console.log("Nombre: " + this.nombre);
        console.log("Creador: " + this.creador);
        console.log("Plataforma: " + this.plataforma);
    }
};

let juego3 = new Juego("PC","FIFA","EA sports");
let juego4 = new Juego("PC","Counter Strike","Valve");
console.log(juego2);
console.log(juego3);
console.log(juego4);

juego3.mostrarInformacion();
// Esto de arriba, ya casi no se usa, pero es bueno tener el conocimiento.



// ------------------ CLASES EN JAVASCRIPT
/*
JUEGO DE MARIO = MARIO Y LUIGI

Objeto : Player 1           Obejto : Player 2

Atributos : (Caracteristicas distintas entre los players)
nombre: Mario                   nombre: Luigi
color: Rojo                     nombre: Verde

Metodos:
Saltar();
Correr();
Saludar();
*/

// (IMPORTANTE; La primera letra debe ser en mayuscula)
class Player{
    constructor(nombre, color){
        this._nombre = nombre;
        this._color = color;
    }

    saltar(){
        console.log("Saltando...");
    }

    correr(){
        console.log("Corriendo...");
    }

    saludar(){
        console.log("Holaaaaaaaaaaa soy: " + this._nombre);
    }

    // get -----> Nos permite mostrar informacion...
    get nombre(){
        return "Nombre: " + this._nombre;
    }

    // set -----> Nos permite modificar informacion...
    set nombre(nuevo){
        this._nombre = nuevo;
    }

};

let player1 = new Player("Mario","Rojo");
let player2 = new Player("Luigi","Verde");
let player3 = new Player("Yenetson","Azul");
console.log(player1);
player1.correr();
player1.saltar();
console.log(player2);
player2.saludar();
console.log(player3);
player3.saludar();

// Usar el metodo GET
console.log(player1.nombre);
console.log(player2.nombre);
console.log(player3.nombre);

// Usar el metodo SET
player3.nombre = "Jose";
console.log(player3.nombre);




// ------------------------- SUBCLASE (HERENCIA)
/*
    La herencia tambien suele ser llamada POLIMORFISMO, ya que nos permite crear objetos que comparten atributos y metodos en una clase padre, pero que a su vez puede tener atributos y metodos propios.
*/

class Enemigo extends Player{
    constructor(nombre, color, fuerza){
        super(nombre, color); // Heredamos los atributos de la clase "Player"
        this._fuerza = fuerza;  
    }

    get fuerza(){
        return this._fuerza;
    }

    set fuerza(nuevafuerza){
        this._fuerza = nuevafuerza;
    }
}

let enemigo1 = new Enemigo("Bowser","Amarillo",900);
console.log(enemigo1);
enemigo1.saludar(); // Metodo que hereda de la clase padre
console.log(enemigo1.fuerza);



// Crear una clase llamada calculadora, que no tenga funcion constructora, y que tenga los siguientes metodos:
// Sumar, Restar, Multiplicar y Dividir.

class Calculadora{
    sumar(a,b){
        return a + b;
    }
    restar(a,b){
        return a - b;
    }
    multiplicar(a,b){
        return a * b;
    }
    dividir(a,b){
        if(b === 0){
            return "No es posible";
        }else{
            return a / b;
        }
    }
}

let calculadora1 = new Calculadora();
console.log(calculadora1.sumar(50,50));
console.log(calculadora1.restar(50,50));
console.log(calculadora1.multiplicar(50,50));
console.log(calculadora1.dividir(50,50));
console.log(calculadora1.dividir(50,0));




// ------------------------- BUCLES (LOOPS) (CICLOS)

// ------------ FOR
/*
for()
1. let i = 0 ----> Declaracion de la variable (Contadora)

Nota: Cada parte va separada por ;

2. i < 10; ----> Esta es la condicion que se verifica en cada iteracion del ciclo.

3. i++ ----> i = i + 1 ----> Despues de cada iteracion, la variable se incrementa.

Como se escribe un ciclo for:
for(let i = 0; i < 10; i++){
// Aqui colocamos la logica que deseemos que se ejecute cada vez que el ciclo se repita
}
*/

for(let i = 1; i <= 10; i++){
    //console.log("Hola mundo" + i);
    console.log(`Hola mundo ${i}`); // Interpolar ``. Se puede escribir codigo Javascript.
};

// for con array
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

// Crear un ciclo que imprima solo los numeros pares del 0 al 100.
for(let i = 0; i <=100; i += 2){ // Se puede hacer de las dos formas.
    /*if(i % 2 === 0){
        console.log(`${i} es un numero par`);
    }*/
    console.log(`${i} es un numero par`);
}



// ------------------- FOR IN ----> DEVUELVE LA POSICION DE LOS ELEMENTOS
// Para arrays
for(let i in frutas){
    console.log(i);
    console.log(frutas[i]);
}

// En objetos
let bicicleta = {
    marca: "Mountain Bike",
    rodado: 26,
    color: "Negro",
    cambios:21
};

for(let i in bicicleta){
    // console.log(i); // De esta forma devuelve las propiedades; marca, rodado, color, cambios.
    // console.log(bicicleta[i]); // De esta forma devuelve las valores; Mountain Bike, 26, Negro, 21
    console.log(`${i} : ${bicicleta[i]}`);
}


// Imprime en una sola variable, el nombre, apellido y edad del siguiente objeto:
let persona = {
    nombre: "Jose",
    apellido: "Perez",
    edad: 30
};

let acumulador = "";

for(let propiedad in persona){
    acumulador += `${persona[propiedad]} `;
}

console.log(acumulador);




// ----------------------- FOR OF ----> DEVUELVE EL ELEMENTO DIRECTAMENTE Y NO LA POSICION
for(let fruta of frutas){
    console.log(fruta);
}

/*for(let i of persona){ // El FOR OF solo funciona con arrays, no funciona con objetos.
    console.log(i);
}*/

// ---------------- CICLO WHILE
let contador = 0;

while(contador <= 10){
    console.log(contador);
    contador++; // contador = contador + 1
}

// ----------------- CICLO DO WHILE
// SE EJECUTA SIEMPRE AL MENOS UNA VEZ
let contador2 = 0;
do{
    console.log(contador2);
    contador2++;
}while(contador2 <= 10);



// EJERCICIOS
let compras = [["carne molida","carne mechada"],["papas","batatas","cebollas"],["jamon","queso","salame"]];

console.log(compras[1][1]);
// Imprime cada uno de los elementos dentro de los arrays del array de compras (con for).

for (let i in compras){
    for(let j in compras[i]){
        console.log(compras[i][j]);
    }
}

/* EJERCICIOS 

1) Crea un juego en el que el programa genera un numero aleatorio del 1 al 100, y luego le pide al usuario ese numero. El bucle "WHILE" debe continuar ejecutandose hasta que el usuario adivine correctamente el numero. (Investigar Math.random)

2) Crea un Objeto que contenga informacion sobre libros, donde cada propiedad es el titulo de un libro y su valor es un objeto con detalles adicionales (autor,año de publicacion u otra cosa). Utilizar un bucle "FOR IN" para imprimir el titulo y el autor.

3) Crea un array de objetos que presenten personas, donde cada objeto tenga propiedades como (nombre,edad y ciudad). Utilizar un bucle "FOR OF" para imprimir el nombre y la ciudad de cada persona.

4) Crea un programa que elija una palabra al azar de una lista predefinida y le pida al usuario que adivine la palabra letra por letra. Utilizar bucle "DO WHILE", para continuar solicitando letras hasta que el usuario adivine la palabra o haya cometido un numero maximo de intentos. (Investigar Math.random).

5) Crea una clase llamada "Persona" que tenga un constructor que reciba dos parametros (nombre y edad). La clase debe tener un metodo "saludar" y que imprima un mensaje de saludo con el nombre y la edad de la persona.

6) Crea una clase llamada "Estudiante" que herede de la clase "Persona" del ejercicio anterior. La clase "Estudiante" debe tener un constructor adicional que reciba un parametro (curso). Agregar un metodo "presentar" a la clase "Estudiante" que incluya la informacion del nombre,edad y curso.

7) Crea una funcion que tome una cadena de texto y dos palabras como argumentos (parametros), y reemplace todas las ocurrencias de la primera palabra con la segunda palabra.

8) Escribe una funcion que tome un array de objetos, donde cada objeto tiene una propiedad "edad" y filtre los objetos que tienen una edad mayor o igual a 18.

9) Dado el siguiente array [{nombre: "Luis", edad: 33, hobbies: ["videojuegos, "musica, "cine"]}, {nombre: "Juanito", edad: 30}, {nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"]}]. Recorre e imprime cada uno de los valores de cada uno de los elementos.

10) Agrega un ultimo elemento al array anterior con el nombre de "Maria" y la edad de 25 años

11) Encuentra el elemento con el nombre de "Pedro" y elimina el elemento hobbies.

12) Encuentra el elemento con el nombre de "Juanito" y agrega un elemento hobbies con el valor de "diseñar".

13) Crear una clase llamada "Inventario" que se encargará de gestionar un inventario de productos:
 * La clase "Inventario" debe tener un constructor que inicialice un arreglo vacío llamado productos.
 * Debe haber un método llamado agregarProducto que acepte tres parámetros (nombre, precio, y cantidad). Este método deberá agregar un objeto producto al arreglo productos con los datos proporcionados.
 * Debe existir un método llamado calcularValorTotal que calcule y devuelva el valor total del inventario multiplicando el precio por la cantidad para cada producto en el arreglo y sumándolos.
 * Debe haber un método llamado listarProductos que recorra el arreglo productos y muestre en la consola los detalles de cada producto (nombre, precio y cantidad).
 * Crea una instancia de la clase "Inventario" llamada miInventario.
 * Agrega al menos tres productos a miInventario utilizando el método agregarProducto
 * Llama al método listarProductos en miInventario para mostrar la lista de productos en la consola.
 * Llama al método calcularValorTotal en miInventario y muestra el valor total del inventario en la consola.

*/