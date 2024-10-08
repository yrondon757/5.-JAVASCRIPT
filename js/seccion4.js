// ---------------- SECCION 4 DE JAVASCRIPT ------------------

// ---- SWITCH
/*
Es una estructura de control que permite ejecutar diferentes bloques de codigos basados en el valor de una expresion
*/

const dia = 5;

switch(dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    default:
    console.log("El dia es invalido");
}



// ---- Desestructuracion de Arrays
/*
Permite extraer valores de una array y asignarlos a variables
*/

const array = [1,2,3,4,5];

const [a, b, c, d, e] = array;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// const [x = 10, y = 20] = []; // Con el campo vacio, las variables mantienen sus valores predeterminados
// const [x = 10, y = 20] = [5]; // Con el valor 5, cambiara el valor de la variable X
const [x = 10, y = 20] = [5, 10]; // Con los dos valores, ambas variables cambian su valor
console.log(x);
console.log(y);

// ---- Desestructuracion de Objetos
/*
Permite extraer propiedades de un objeto y asignarlas a variables
*/

const persona = {
    nombre: "Jose",
    edad: 33,
    ciudad: "Madrid"
};

const { nombre, edad, ciudad } = persona;
console.log(nombre);
console.log(edad);
console.log(ciudad);

// Tambien podemos asignar propiedades a variables con nombres diferentes utilizando un alias

const { nombre : namePerson, edad : agePerson, ciudad : cityPerson } = persona;
console.log(namePerson);
console.log(agePerson);
console.log(cityPerson);

// ---- Desestructuracion de Parametros en funciones
/*
Tambien se puede usar para simplificar el manejo de parametros en funciones
*/

function info({ nombre, edad }){
    console.log(`Nombre: ${nombre}, edad: ${edad}`);
}

const persona2 = {
    nombre: "Pedro",
    edad: 25
};

info(persona2);


// ---- Spread
/*
Es un operadr en js, que se representa por tres puntos(...), permite expandir o descomponer arrays u objetos en elementos individuales.
Se utiliza para hacer copias superficiales de estructuras, combinar arrays y objetos, o pasar elementos de un array como argumentos a una funcion.
*/

// - Expandir arrays
const numeros = [1,2,3];
const masNumeros = [4,5,6];

const todosLosArrays = [...numeros, ...masNumeros]; // Quedaria es esta forma: [1,2,3,4,5,6];
console.log(todosLosArrays);


// - Expandir objetos
const persona3 = {
    nombre: "Maria",
    edad: 27
};

// Crear una copia de un objeto
const copiaPersona = {...persona3};
console.log(copiaPersona);

// Crear una combinacion de objetos
const direccion = {
    ciudad: "Madrid",
    pais: "Espana"
};

const personaDireccion = {...persona3, ...direccion};
console.log(personaDireccion);

// Pasar elementos de un array como argumentos
const numeros2 = [1,2,3,4];

function sumar(a,b,c,d){
    return a + b + c + d;
}

const resultado = sumar(...numeros2) // sumar(1,2,3,4);
console.log(resultado);



// ---------------------------- TRY - CATCH
/*
La estructura try y catch en js se utiliza para manejar errores en el codigo de una manera controlada, esto hace que nuestra aplicacion continue ejecutandose incluso si se produce un error.
*/

try{
    let numero = 10;
    numero = numero + 2;
}catch(error){
    console.log(`Esto es un error: ${error}`)
}finally{
    console.log("Siempre me ejecuto");
}

console.log("Me ejecuto");



// ----------------------- setInterval - setTimeout
/*
Son funciones de js que permiten programar la ejecucion de codigo despues de un periodo de tiempo definido.
*/

// ---- SetTimeout
/*
Se utiliza para programar la ejecucion de una funcion o un bloque de codigo despues de cierto periodo de tiempo, son en milisegundods (ms) 1000 = 1 segundo
*/

/*setTimeout(()=>{
    console.log("Respuesta con retraso...");
}, 5000);*/

// ---- setInterval
/*
La funcion setInterval se utiliza para ejecutar repetidamente una funcion o bloque de codigo a intervalos regulares de tiempo, setInterval(funcion, tiempo)
*/

/*setInterval(()=>{
    console.log("Me repito");
}, 3000);*/

/*let contador = 0
const intervalo = setInterval(()=>{
    contador++;
    console.log(`Han pasado ${contador} segundos...`);
    if(contador >= 10){
        console.log("Intervalo finalizado");
        clearInterval(intervalo);
    }
}, 1000);*/



// ------------- SINCRONISMO
/*
Es la data que esta directamente en el archivo, por la cual no existe ningun tipo de retraso(delay)
La informacion es capaz de mostrarse de manera instantanea.
*/

const data = [{nombre: "GTA5", year: 2013},{nombre:"GTA6", year: 2025}];

const objeto = ()=>{
    return data;
}

console.log(objeto());

// ------------- ASINCRONISMO
/*
Es la data que en este caso esta simulando ser una consulta a una API la cual nos manda algun dato, ahora esta API tiene un retraso de 5 segundos en devolver la data.
*/

console.log("Loading...");
setTimeout(()=>{
    console.log(objeto());
    console.log("Datos cargados.");
}, 5000);

/*
El asincronismo es una forma de ejecutar codigo en la cual no se ejecuta de forma secuencial, es decir no se ejecuta de arriba hacia abajo, si no que, se ejecuta de forma paralela. Esto permite que el codigo se ejecute de forma mas rapida. El asincronismo se puede lograr de varias formas, entre ellas tenemos:

- Callbacks
- Promesas
- Async/Await
*/

// Callbacks
/*
Los callbacks son funciones que se ejecutan despues de que una funcion ha terminado.
Es decir, se ejecutan de que una funcion ha sido llamada.
*/

function resta(num1,num2,funcion){
    let result = num1 - num2;
    funcion(result);
};

resta(5,3,(resultado)=>{
    console.log(`Este es el resultado desde un callback: ${resultado}`);
})

// ---- Promesas
/*
Las promesas son objetos que representan la terminacion o el fracaso eventual de una operacion asincrona.
Es decir, una promesa es un objeto que representa el resultado de una operacion asincrona.
Una promesa tiene 3 estado:
- Pending = Estado inicial, no se ha cumplido ni rechazado la promesa.
- FulFilled = La operacion se ha cumplido.
- Rejected = La operacion no se ha cumplido.
*/

// Crear un promesa
const miPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let exito = false;
        if(exito){
            resolve("Operacion exitosa!");
        }else{
            reject("Hubo un error!");
        }
    }, 2000)
});

console.log(miPromesa);

// Vamos a recibir esa promesa
miPromesa
    .then((resultado)=>{
        console.log(resultado);
    })
    .catch((error)=>{
        console.log(error);
    });

// Otro ejemplo

const obtenerPizza = new Promise ((resolve, reject)=>{
    let problema = false;
    if(!problema){
        setTimeout(()=>{
            resolve("Pizza Familiar");
        }, 6000)
    }else{
        reject("Lo siento, no podemos hacer la pizza, tenemos problemas.");
    }
});

console.log("Esperando a que la pizza este lista...");

obtenerPizza
    .then((pizza)=>{
        console.log(`La ${pizza} esta lista.`);
    })
    .catch((error)=>{
        console.log(error);
    });


// ---------- Async / Await
/*
Es una forma de escribir codigo asincrono, de forma que se vea codigo sincrono.
*/

async function miFuncion(){
    return "Hola desde la funcion";
}

miFuncion()
    .then((mensaje)=>{
        console.log(mensaje);
    });

// Otro ejemplo

async function miFuncion2(){
    let promesa = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`#### La operacion fue exitosa ####`);
        }, 5000);
    })
    console.log("Esperando a la promesa...");
    let resultado = await promesa.then((mensaje)=> mensaje);
    console.log(resultado);
}

miFuncion2();



// --------------------------- JSON ---> Notacion de objetos en js
/*
JSON, significa "Javascript Object Notation", es un formato de intercambio de datos ligeros y legible por humanos.
Se utiliza para representar datos estructurados de una manera que sea facil de entender por los humanos, como para las maquinas. JSON es comunmente utilizado en la comunicacion entre servidores y clientes web.
*/

// Un JSON se ve de la siguiente manera:
/*
{
    "nombre":"Yenetson",
    "apellido":"Rondon",
    "edad": 20,
    "direccion":{
        "calle": "calle1",
        "numeroCasa": 123,
        "ciudad": "madrid",
    },
    "colores": [
        "Rojo",
        "Azul",
        "Verde"
    ]
}
*/

// ------------------- LOCAL STORAGE
/*
En js es un objeto de almacenamiento de datos persistente que permite a las aplicaciones web almacenar datos de manera local en el navegador del USUARIO. Los datos almacendos de localstorage persisten incluso despues de que el usuario cierra el navegador o reinicia el computador.
*/

// ------ setItem
// Puedes almacenar datos en localstorage utilizando la propiedad setItem(key,value). Ambos, tanto la clave(key) y el valor(value) deben ser cadenas de texto, es decir JSON.

localStorage.setItem("users","[{'nombre':'Jose','apellido','Rico'}]");

// ------ getItem
// Puedes  obtener los datos de localstorage utilizando la propiedad getItem(key);

const users = localStorage.getItem("users");
console.log(users);

// ------ removeItem
// Puedes eliminar un elemento especifico de localstorage utilizando la propiedad removeItem(key);

localStorage.removeItem("users");

// ------ clear
// Puedes eliminar todos los datos almacenados en localstorage

localStorage.clear();

// Limitaciones de localstorage
// - Capacidad de almacenamiento : localstorage tiene un limite de almacenamiento, de 5MB por dominio (pagina).
// - Sincronizacion de dominio: localstorage esta vinculado al dominio de una pagina web. Los datos almacenados en localstorage de un dominio no estan disponibles para otro dominio.

// Ejemplo de como almacenar datos

const usuario = {
    nombre: "Maria",
    edad: 20
};

localStorage.setItem("usuarios", JSON.stringify(usuario));

// Obtener y analizar datos
const usuariosGuardados = localStorage.getItem("usuarios");
const usuariosFormateados = JSON.parse(usuariosGuardados);
console.log(usuariosGuardados);
console.log(usuariosFormateados);

// Recuerda que los datos en localstorage estan limitados a cadenas de textos. Puedes utilizar: JSON.stringify() para convertir objetos de js en cadenas de texto antes de almacenarlos.
// JSON.parse() para convertir las cadenas de texto en objetos al obtenerlos.