const charactersDiv = document.getElementById("characters");
const paginationDiv = document.getElementById("pagination");
const searchInput = document.getElementById("search");
let currentPage = 1;
const totalPages = 42;
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let characterData = []

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
        <button data-id="${character.id}" class="favorite-button ${favorites.includes(character.id) ? "active" : ""}">
            ${favorites.includes(character.id) ? "Eliminar de favoritos" : "Agregar a favoritos"}
        </button>
    </div>    
    `
    )
    .join("");
    charactersDiv.innerHTML = characterElements;

    document.querySelectorAll(".favorite-button").forEach(button=>{
        button.addEventListener("click", ()=>{
            const characterId = parseInt(button.dataset.id);
            if(favorites.includes(characterId)){
                favorites = favorites.filter(id => id !== characterId)
            }else{
                favorites.push(characterId);
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
            renderCharacters(characters);
        })
    })
};

const findCharacters = (term) => {
    const findCharacter = characterData.filter(character =>{
        return character.name.toLowerCase().includes(term.toLowerCase());
    })
    renderCharacters(findCharacter);
}

const createPagination = () =>{
    paginationDiv.innerHTML = "";
    const maxVisiblePages = 5;

    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let endPage= Math.min(startPage + maxVisiblePages - 1, totalPages);

    if(endPage - startPage < maxVisiblePages - 1){
        startPage = Math.max(endPage - maxVisiblePages + 1, 1)
    }
    console.log(startPage)
    if(startPage > 1){
        paginationDiv.innerHTML += "<button>1</button>";
        if(startPage > 2){
        paginationDiv.innerHTML += "<button>...</button>";
        }
    }

    for(let i = startPage; i <= endPage; i++){
        paginationDiv.innerHTML += `<button ${i === currentPage ? "class='active'":""}>${i}</button>`
    }

    if(endPage < totalPages){
        if(endPage < totalPages - 1){
        paginationDiv.innerHTML += "<button>...</button>";
        }
        paginationDiv.innerHTML += `<button>${totalPages}</button>`
    }

    document.querySelectorAll(".pagination button").forEach(button =>{
        button.addEventListener("click",()=>{
        const page = parseInt(button.textContent)
        if(page !== currentPage){
            currentPage = page
            updateCharacters();
        }
        })
    })
    }

    const updateCharacters = async () =>{
        const data = await fetchCharacters(currentPage);
        characterData = data.results;
        findCharacters(searchInput.value);
        createPagination();
        }

        searchInput.addEventListener("input", ()=>{
        findCharacters(searchInput.value)
        });

        updateCharacters();