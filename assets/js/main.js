const pokemonsContainer = document.querySelector('.pokemons');

const req =
    PokeApi.getPokemons().then((pokemons = []) => {
        pokemonsContainer.innerHTML = pokemons.map(CreatePokemonCards).join('');
    });

convertPokemonTypesToLi = (pokemonTypes) =>{
    return pokemonTypes.map(typeSlot => `<li class="type">${typeSlot.type.name}</li>`).join('');
}

const CreatePokemonCards = (pokemon) => {
    console.log(pokemon);
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.id}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types)}
                </ol>
                <img src="${pokemon.sprites.other['official-artwork'].front_default}"
                    alt="${pokemon.name}" />
            </div>
        </li>`;
};
