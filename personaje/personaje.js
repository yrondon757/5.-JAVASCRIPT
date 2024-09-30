let x = 0;
let y = 0;
let contador = 0;
let tamano = 120;
let personaje = document.getElementById("personaje");
let objeto = document.getElementById("objeto");

function movimiento(evento){
    if(evento.key == "d"){
        x += 25;
        personaje.style.left = x + "px"; // left = 25px
        personaje.src = "images/p-right.png"; // Hacemos que el personaje mire hacia la derecha con la imagen.
    }
    if(evento.key == "a"){
        x -= 25;
        personaje.style.left = x + "px"; // left = -25px
        personaje.src = "images/p-left.png"; // Hacemos que el personaje mire hacia la izquierda con la imagen.
    }
    if(evento.key == "w"){
        y -= 25;
        personaje.style.top = y + "px"; // top = -25px
    }
    if(evento.key == "s"){
        y += 25;
        personaje.style.top = y + "px"; // top = -25px
    }
    if(evento.key =="i"){
        contador++;
        if(contador == 5){
            tamano += 80;
            personaje.style.width = tamano + "px";
            contador = 0;
        }
    }

    if(colision(personaje, objeto)){
        console.log(colision(personaje, objeto));
        if(evento.key == "d") x -= 25;
        if(evento.key == "a") x += 25;
        if(evento.key == "s") y -= 25;
        if(evento.key == "w") y += 25;

        personaje.style.left = x + "px";
        personaje.style.top = y + "px";
    }
}

function colision(elemento1, elemento2){
    let limitesElemento1 = elemento1.getBoundingClientRect();
    let limitesElemento2 = elemento2.getBoundingClientRect();
    return(
        limitesElemento1.left < limitesElemento2.right &&
        limitesElemento1.right > limitesElemento2.left &&
        limitesElemento1.top < limitesElemento2.bottom &&
        limitesElemento1.bottom > limitesElemento2.top
    );
}

// Capturamos el evento en la ventana de la pagina.
window.onkeydown = movimiento;