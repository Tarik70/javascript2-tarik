let allPokemon = [];

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const saveFavorites = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

const showItems = (items) => {

    const results = document.querySelector('#results');

    results.innerHTML = '';

    results.innerHTML = items.map((pokemon) => {

        const isFavorite = favorites.includes(pokemon.name);

        return `
            <article>
                <h2>${pokemon.name}</h2>

                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
                    alt="${pokemon.name}"
                >

                <button class="favorite-btn">
                    ${isFavorite ? '❤️ Favoriet' : '🤍 Voeg toe aan favorieten'}
                </button>
            </article>
        `;

    }).join('');

    document.querySelectorAll('.favorite-btn').forEach((btn, i) => {

        btn.addEventListener('click', () => {

            const pokemonName = items[i].name;

            if (favorites.includes(pokemonName)) {

                favorites = favorites.filter(name => name !== pokemonName);

            } else {

                favorites.push(pokemonName);
            }

            saveFavorites();

            showItems(items);
        });
    });
};

document.querySelector('#loading').textContent = 'Laden...';

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(r => r.json())
    .then(data => {

        console.log(data);

        document.querySelector('#loading').textContent = '';

        allPokemon = data.results.map((pokemon, index) => ({
            ...pokemon,
            id: index + 1
        }));

        showItems(allPokemon);
    })
    .catch(error => {

        document.querySelector('#loading').textContent =
            'Er is iets misgegaan.';

        console.error('Fout:', error);
    });

document.querySelector('#show-all').addEventListener('click', () => {

    showItems(allPokemon);

});

document.querySelector('#show-favorites').addEventListener('click', () => {

    const favoritePokemon = allPokemon.filter(pokemon =>
        favorites.includes(pokemon.name)
    );

    showItems(favoritePokemon);

});