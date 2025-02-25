const PokeApi = {}

PokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then(response => response.json())
        .then(body => body.results)
        .then(pokemons => pokemons.map(PokeApi.getPokemonDetail))
        .then(promises => Promise.all(promises));

}

convertPokeApiDetailToPokemon = (detail) => {
    const pokemon = new Pokemon();
    pokemon.number = detail.id;
    pokemon.name = detail.name;
    
    const types = detail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.type = type;
    pokemon.types = types;

    pokemon.photo = detail.sprites.other.dream_world.front_default;

    console.table(pokemon);
    return pokemon;
}

PokeApi.getPokemonDetail = (poke) => {
    return fetch(poke.url)
        .then(response => response.json())
        .then(pokemon => convertPokeApiDetailToPokemon(pokemon)) 
}