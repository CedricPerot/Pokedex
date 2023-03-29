// const pokemon = pokemonList[1].name;
// const pokemonPicture = pokemonList[1].imgSrc;

function PokemonCard(pokemon) {
    return pokemon.imgSrc ? (<figure><img src={pokemon.imgSrc} alt="Bulbosaur"/><figcaption>{pokemon.name}</figcaption>
    </figure>) : <p>???<figcaption>{pokemon.name}</figcaption></p>;
  }

  PokemonCard.PropTypes = {
    pokemonList : PropTypes.arrayOf(PropTypes.shape({
      name : PropTypes.string.isRequired,
      imgSrc : PropTypes.string,
    }).isRequired).isRequired,
  }
  
  export default PokemonCard;