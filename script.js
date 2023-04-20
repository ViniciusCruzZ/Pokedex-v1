const api = 'https://pokeapi.co/api/v2/pokemon';
const pokeName = document.querySelector('.pokeName > p');
const pokeImg = document.querySelector('.pokeImg > img');
const pokeInput = document.querySelector('#pokeSearch');
const btnSearch = document.querySelector('#btnSearch');
const pokeTypes = document.querySelector('.pokeTypes');

btnSearch.addEventListener('click', () => {
    
    if (pokeInput.value <= 0 || pokeInput.value > 1281) {
        alert('Infelizmente não temos todos os pokémons, porfavor pesquise pokemons entre 1 e 1281 👍')

        pokeInput.value = ''
    } else {
        fetch(api+`/${pokeInput.value}`)
        .then(resp => resp.json())
        .then(data => {
            const name = data.name;
            const img = data.sprites.front_default;
            const typesCount = data.types.length

            
            pokeImg.src = img
            pokeName.textContent = name;

            pokeInput.value = ''

            console.log(types)
        })
    
        .catch(erro => {
            alert(erro)
        })
    }
})