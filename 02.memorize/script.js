
fetch('https://pokeapi.co/api/v2/pokemon/50')
    .then(res => res.json())
    .then(data => console.log(
        data.sprites.other['official-artwork'].front_default
    ));




