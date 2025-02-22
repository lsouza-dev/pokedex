
// const GetPokemons = async () => {
//     var content = await fetch('https://pokeapi.co/api/v2/pokemon');
//     var data = await content.json();
//     var pokemons = data.results;

//     console.log(pokemons);
//     return pokemons;
// }

// const GetPokemonsAbilites = async (pokemons) => {
//     var pokeHabilities = [];
//     const data = await pokemons.map(p => {
//         p.abilities.map(a => {
//             pokeHabilities.push(a.ability);
//         });
//     });
//     console.log(pokeHabilities);
//     return pokeHabilities;
// }

// const pokemons = GetPokemons();

// const habilities = GetPokemonsAbilites(pokemons);