const api = 'https://pokeapi.co/api/v2/pokemon';
const pokeName = document.querySelector('.pokeName > p');
const pokeImg = document.querySelector('.pokeImg > img');
const pokeInput = document.querySelector('#pokeSearch');
const btnSearch = document.querySelector('#btnSearch');
const pokeTypes = document.querySelector('.pokeTypes');

btnSearch.addEventListener('click', () => {
    // Verificando se o input está devidamente preenchido
    if (pokeInput.value <= 0 || pokeInput.value > 1281) {
        alert('Infelizmente não temos todos os pokémons, porfavor pesquise pokemons entre 1 e 1281 👍')

        pokeInput.value = ''

    // Chamando a API
    } else {
        fetch(api+`/${pokeInput.value}`)
        .then(resp => resp.json())
        .then(data => {
            const img = data.sprites.front_default;
            const name = data.name;
            const types = data.types;
            
            pokeImg.src = img
            pokeName.textContent = name;
            types.forEach(c => {
                let pokeType = c.type.name;
                pokeTypes.innerHTML = `<small>${pokeType}</small>`
            });

            pokeInput.value = ''
        })
    
        .catch(erro => {
            alert(erro)
        })
    }
})