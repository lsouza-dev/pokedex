const pokemonsContainer = document.querySelector('.pokemons');
const loadMoreButton = document.getElementById('loadMore');

const maxRecords = 151;
const limit = 10;
let offset = 0;

loadPokemonItens = (offset, limit) => {
    PokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `<li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                    alt="${pokemon.name}" />
            </div>
        </li>`
        ).join('')

        pokemonsContainer.innerHTML += newHtml;
    })
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    
    const qtdRecordWithNextPage = offset + limit;

    if(qtdRecordWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, limit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else{ 
        loadPokemonItens(offset, limit);
    }
})