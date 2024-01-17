const api = 'https://pokeapi.co/api/v2/pokemon';
const pokeName = document.querySelector('.pokeName > p');
const pokeImg = document.querySelector('.pokeImg > img');
const pokeInput = document.querySelector('#pokeSearch');
const btnSearch = document.querySelector('#btnSearch');
const pokeTypes = document.querySelector('.pokeTypes');
const bgTypes = {
    "grass": "#458b20",
    "fire": "#671010",
    "water": "#2fa6df",
    "flying": "#cfe1e9",
    "normal": "#9d9d9d",
    "shadow": "#1c1c1c",
    "fighting": "#dd7d45",
    "poison": "#532a69",
    "ground": "#511e0b",
    "rock": "#4d403b",
    "bug": "#3aef72",
    "ghost": "#ffffff",
    "steel": "#afafaf",
    "psychic": "#d800ff",
    "electric": "#e5df0e",
    "ice": "#00fff3",
    "dragon": "#ff5200",
    "dark": "#331f30",
    "fairy": "#ff80fb",
    "unknown": "#afafaf00"
};

// Aplicando o Enter na pesquisa
pokeInput.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        btnSearch.click();
    }
});

btnSearch.addEventListener('click', () => {
    // Verificando se o input está devidamente preenchido
    if (pokeInput.value <= 0 || pokeInput.value > 1281) {
        alert('Infelizmente não temos todos os pokémons, porfavor pesquise pokemons entre 1 e 1281 👍')

    // Chamando a API
    } else {
        fetch(api+`/${pokeInput.value.toLowerCase()}`)
        .then(resp => resp.json())
        .then(data => {
            let img = data.sprites.front_default;
            let name = data.name;
            let types = data.types;

            types.forEach(e => {
                let type = e.type.name;
                pokeTypes.innerHTML += `<small>${type}</small>`
            });
            
            let firstType = types[0].type.name

            pokeImg.src = img
            pokeImg.style.backgroundColor = bgTypes[`${firstType}`]
            pokeImg.alt = "Imagem do pokemon " + name
            pokeName.textContent = name.toUpperCase();
        })
    
        .catch(erro => {
            alert(erro)
        })

        pokeImg.style.background = ''
        pokeTypes.innerHTML = ''
        pokeInput.value = ''
    }
})