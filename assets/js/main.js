const pokemonsContainer = document.querySelector('.pokemons');

class Pokemon {
    constructor(id, name, image, types) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.types = types;
    }
}

const GetPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
    const data = await response.json();
    return GetPokemonsInfo(data.results);
};

const GetPokemonsInfo = async (pokemons) => {
    let pokeList = [];
    for (let i = 0; i < pokemons.length; i++) {
        const response = await fetch(pokemons[i].url);
        const data = await response.json();

        const poke = new Pokemon(
            data.id,
            data.name,
            data.sprites.other.dream_world.front_default,
            data.types.map(a => a.type.name)
        );
        pokeList.push(poke);
    }
    return pokeList;
};

const CreatePokemonCards = (pokemons) => {
    pokemonsContainer.innerHTML = '';

    pokemons.forEach(p => {
        let card = document.createElement('li');
        let number = document.createElement('span');
        let name = document.createElement('span');
        let detail = document.createElement('div');
        let image = document.createElement('img');
        let types = document.createElement('ol');

        card.classList.add('pokemon');
        number.classList.add('number');
        name.classList.add('name');
        detail.classList.add("detail");
        types.classList.add('types');

        p.types.forEach(typeName => {
            let type = document.createElement('li');
            type.classList.add('type');
            type.textContent = typeName;
            types.appendChild(type);
        });

        number.textContent = `#${p.id}`;
        name.textContent = p.name;
        image.src = p.image;
        image.alt = p.name;

        card.appendChild(number);
        card.appendChild(name);
        card.appendChild(detail);
        detail.appendChild(types);
        detail.appendChild(image);
        pokemonsContainer.appendChild(card);
    });
};

// Chamando as funções corretamente
(async () => {
    const pokemons = await GetPokemons();
    CreatePokemonCards(pokemons);
})();
