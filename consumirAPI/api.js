// --------------------- API (FETCH) -----------------------

// -------- Que es fetch?
/*
Es una funcion que permite hacer peticiones HTTP desde javascript
El fetch recibe 2 parametros:
- La url a la que se va a realizar la peticion.
- Un objeto con la configuracion de la peticion.
*/

/*const apiData = fetch("https://jsonplaceholder.typicode.com/todos");

apiData
    .then((respuesta)=> respuesta.json())
    .then((datos)=> {
        datos.map((elemento)=>{
            let contenido = document.getElementById("contenido");
            let parrafo = document.createElement("p");
            parrafo.textContent = `${elemento.id} - ${elemento.title}`;
            contenido.appendChild(parrafo);
        })
    })
    .catch((error)=>{
        console.log(error);
    })*/

/*const personajes = fetch("https://rickandmortyapi.com/api/character");
const contenido = document.getElementById("contenido");

personajes
    .then((respuesta)=> respuesta.json())
    .then((datos)=>{
        datos.results.map((personaje)=>{
            let parrafo = document.createElement("p");
            parrafo.textContent = `${personaje.id} - ${personaje.name}`;
            let imagen = document.createElement("img");
            imagen.src = personaje.image;
            contenido.appendChild(parrafo);
            contenido.appendChild(imagen);
        })
    })*/

/*let arrayDatos = [];
const apiUrl = "https://rickandmortyapi.com/api/character";

const getDatos = async (url)=>{
    return fetch(url)
        .then((respuesta) => respuesta.json())
        .then(datos => datos)
        .catch((error)=>{console.log(error)})
};

const inicio = async () =>{
    const resultado = await getDatos(apiUrl);
    const resultado2 = await getDatos(resultado.info.next);
    const resultado3 = await getDatos(resultado2.info.next);
    arrayDatos = [...resultado.results, ...resultado2.results, ...resultado3.results];
    console.log(arrayDatos);
};

inicio();*/

const charactersDiv = document.getElementById("characters");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentPage = 1;

const fetchCharacters = async (page) => {
    try {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    return data;
    } catch (error) {
    console.log(error);
    }
};

const renderCharacters = async (characters) => {
    const characterElements = characters
    .map((character) => `
    <div class="character">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
    </div>    
    `
    )
    .join("");
    charactersDiv.innerHTML = characterElements;
};

const updateCharacters = async () => {
    charactersDiv.innerHTML = "<p>Cargando...</p>";

    setTimeout(async () => {
    const data = await fetchCharacters(currentPage);
    renderCharacters(data.results);
    prevButton.disabled = !data.info.prev;
    nextButton.disabled = !data.info.next;
    }, 2000);
};

prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
    currentPage--;
    updateCharacters();
    }
});

nextButton.addEventListener("click", () => {
    currentPage++;
    updateCharacters();
});

updateCharacters();