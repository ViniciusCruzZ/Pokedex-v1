const api = 'https://pokeapi.co/api/v2/pokemon';
const pokeName = document.querySelector('.pokeName > p');
const pokeImg = document.querySelector('pokeImg > img');
const pokeInput = document.querySelector('#pokeSearch');
const btnSearch = document.querySelector('#btnSearch')

btnSearch.addEventListener('click', () => {
    
    fetch(api+`/${pokeInput.value}`)
    .then(resp => resp.json())
    .then(data => {
        
        const name = data.name;
        const img = data.sprites.front_default;
        
        pokeName.textContent = name;
        pokeImg.setAttribute('src', img)
    
        console.log(pokeName)
    })
    .catch(erro => {
        alert('Erro: ' + erro)
    })
})


//  .then(response => response.json())
//  .then(data => {
    //     const name = data.name;
    //     const imageUrl = data.sprites.front_default;
    //     const pokemonImage = document.createElement('img');
    //     pokemonImage.src = imageUrl;
    //     document.body.appendChild(pokemonImage);
    //     const pokemonName = document.createElement('h2');
    //     pokemonName.textContent = name;
    //     document.body.appendChild(pokemonName);
    //     console.log(data)
    // })