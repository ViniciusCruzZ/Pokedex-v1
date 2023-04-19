const url = 'https://pokeapi.co/api/v2/pokemon/1';
 fetch(url)
 .then(response => response.json())
 .then(data => {
    const name = data.name;
    const imageUrl = data.sprites.front_default;
    const pokemonImage = document.createElement('img');
    pokemonImage.src = imageUrl;
    document.body.appendChild(pokemonImage);
    const pokemonName = document.createElement('h2');
    pokemonName.textContent = name;
    document.body.appendChild(pokemonName);
    console.log(data)
}) 
    .catch(error => {
        console.log('Erro:', error); 
    });