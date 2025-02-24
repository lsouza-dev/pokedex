const PokeApi = {}

PokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then(response => response.json())
        .then(body => body.results)
        .then(pokemons => pokemons.map(PokeApi.getPokemonDetail))
        .then(promises => Promise.all(promises));

}

PokeApi.getPokemonDetail = (poke) => {
    return fetch(poke.url)
        .then(response => response.json())
}