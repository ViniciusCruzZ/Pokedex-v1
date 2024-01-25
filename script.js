const api = 'https://pokeapi.co/api/v2/pokemon';
const pokeName = document.querySelector('.pokeName > p');
const pokeImg = document.querySelector('.pokeImg > img');
const pokeInput = document.querySelector('#pokeSearch');
const btnSearch = document.querySelector('#btnSearch');
const pokeTypes = document.querySelector('.pokeTypes');
const bgTypes = {
    "grass": "#74CB48",
    "fire": "#F57D31",
    "water": "#6493EB",
    "flying": "#A891EC",
    "normal": "#AAA67F",
    "shadow": "#1c1c1c",
    "fighting": "#C12239",
    "poison": "#A43E9E",
    "ground": "#DEC16B",
    "rock": "#B69E31",
    "bug": "#A7B723",
    "ghost": "#70559B",
    "steel": "#B7B9D0",
    "psychic": "#FB5584",
    "electric": "#F9CF30",
    "ice": "#9AD6DF",
    "dragon": "#7037FF",
    "dark": "#75574C",
    "fairy": "#E69EAC",
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