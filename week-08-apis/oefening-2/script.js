let allPokemon = [];

const pokemonList = document.querySelector('#pokemon-list');
const counter = document.querySelector('#counter');
const searchBar = document.querySelector('#search-bar');

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        allPokemon = data.results.map((pokemon, index) => {
            return {
                ...pokemon,
                id: index + 1
            };
        });

        renderPokemon(allPokemon);
    })
    .catch(error => console.error('Fout:', error));

function renderPokemon(pokemonArray) {

    pokemonList.innerHTML = '';

    counter.textContent = `Aantal Pokémon: ${pokemonArray.length}`;

    pokemonArray.forEach(pokemon => {

        const article = document.createElement('article');

        const title = document.createElement('h2');
        title.textContent = pokemon.name;

        const image = document.createElement('img');
        image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
        image.alt = pokemon.name;

        article.appendChild(title);
        article.appendChild(image);

        pokemonList.appendChild(article);
    });
}

searchBar.addEventListener('input', () => {

    const searchTerm = searchBar.value.toLowerCase();

    const filteredPokemon = allPokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm)
    );

    renderPokemon(filteredPokemon);
});