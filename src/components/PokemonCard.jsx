import PropTypes from "prop-types";

function PokemonCard(pokemon) {
    return pokemon.imgSrc ? (<figure><img src={pokemon.imgSrc} alt={pokemon.name}/><figcaption>{pokemon.name}</figcaption>
    </figure>) : <p>???<figcaption>{pokemon.name}</figcaption></p>;
  }
//ajout des prop types

  PokemonCard.PropTypes = {
    pokemon : PropTypes.arrayOf(PropTypes.shape({
      id : PropTypes.string.isRequired,
      name : PropTypes.string.isRequired,
      imgSrc : PropTypes.string,
    }).isRequired).isRequired,
  }
  
  export default PokemonCard;