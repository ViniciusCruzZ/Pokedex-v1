const api = 'https://pokeapi.co/api/v2/pokemon';
const pokeName = document.querySelector('.pokeName > p');
const pokeImg = document.querySelector('.pokeImg > img');
const pokeInput = document.querySelector('#pokeSearch');
const btnSearch = document.querySelector('#btnSearch')

btnSearch.addEventListener('click', () => {
    
    if (pokeInput.value <= 0 || pokeInput.value > 1281) {
        alert('Infelizmente não temos todos os pokémons, porfavor pesquise pokemons entre 1 e 1281 👍')
    } else {
        fetch(api+`/${pokeInput.value}`)
        .then(resp => resp.json())
        .then(data => {
            const name = data.name;
            const img = data.sprites.front_default;
            const types = data.types
    
            pokeImg.src = img
            pokeName.textContent = name;
        
            console.log(types)
        })
    
        .catch(erro => {
            alert(erro)
        })
    }
})