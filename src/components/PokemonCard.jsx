const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
const pokemon = pokemonList[1].name;
const pokemonPicture = pokemonList[1].imgSrc;

function PokemonCard() {
    return pokemonPicture ? (<figure><img src={pokemonPicture} alt="Bulbosaur"/><figcaption>{pokemon}</figcaption>
    </figure>) : <p>???</p>;
  }
  
  export default PokemonCard;