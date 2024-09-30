/*
¿Qué Son Expresiones Regulares?
  Las expresiones regulares(también conocida como regexp o regex) son una secuencia de caracteres que 
  forman un patrón de búsqueda, y se utilizan para hacer comparaciones con texto.
  Son una herramienta poderosa para manipular y validar texto, y se pueden utilizar en conjunto 
  con métodos de JavaScript como .match(), .replace() etc..

  Se utilizan en muchos lenguajes de programación, incluyendo JavaScript, para verificar si una cadena de 
  texto cumple con un determinado patrón o para reemplazar texto por un patrón determinado. 
  Las expresiones regulares están escritas entre barras / y pueden incluir una combinación de caracteres 
  literales y caracteres especiales que representan un conjunto de caracteres posibles. 
  
  Por ejemplo, la expresión regular /\d{3}-\d{3}-\d{2}-\d{2}/ busca un número de celular 
  en formato 111-111-11-11.
  389-001-99-22 - 11-20-333-78

Se pueden usar en una gran variedad de tareas, como validación de formularios, extracción de información 
de un párrafo etc...

Sintaxis:
    • const regexp = /".e.t."/i;


        Coincidencias Basicas
        .       - Cualquier Caracter, excepto nueva linea
        \       - Indica que el siguiente caracter se debe tratar de manera especial o "escaparse".
        \d      - Cualquier Digitos (0-9)
        \D      - No es un Digito (0-9)
        \w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
        \W      - No es un Caracter de Palabra.
        \s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
        \S      - No es un Espacio, Tab o nueva linea.

        Limites
        \b      - Limite de Palabra
        \B      - No es un Limite de Palabra
        ^       - Inicio de una cadena de texto
        $       - Final de una cadena de texto

        Cuantificadores:
        *       - Coincide con 0 o más ocurrencias del patrón anterior.
        +       - Coincide con 1 o más ocurrencias del patrón anterior.
        ?       - Coincide con 0 o 1 ocurrencia del patrón anterior.
        {3}     - Numero Exacto
        {3,4}   - Rango de Numeros (Minimo, Maximo)

        Conjuntos de Caracteres
        []      - Caracteres dentro de los brackets
        [^ ]    - Caracteres que NO ESTAN dentro de los brackets

        Grupos
        ( )     - Grupo
        |       - Uno u otro


	.match(regex) (buscar)
	.test (true o false)

    probar en: http://regexr.com/77g8v
*/

/*

i = (No le importa si es mayuscula o minuscula)
g = (global) Buscar todas las coincidencias del texto (de la expresion)

*/

let textoPrueba = "Yenetson yenetSON YENetson";
let regex = /Yenetson/gi;
console.log(textoPrueba.match(regex));