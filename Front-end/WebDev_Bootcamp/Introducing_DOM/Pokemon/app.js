// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.getElementById('container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i < 150; ++i) {
    const pokemon = document.createElement('div');
    const img = document.createElement('img');
    const label = document.createElement('span');

    pokemon.classList.add('pokemon');

    img.src = `${baseUrl}${i}.png`;
    label.innerText = `#${i}`;

    pokemon.append(img);
    pokemon.append(label)
    container.append(pokemon);
}