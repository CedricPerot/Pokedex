// const pokemon = pokemonList[1].name;
// const pokemonPicture = pokemonList[1].imgSrc;

function PokemonCard(props) {
    return props.imgSrc ? (<figure><img src={props.imgSrc} alt="Bulbosaur"/><figcaption>{props.name}</figcaption>
    </figure>) : <p>???<figcaption>{props.name}</figcaption></p>;
  }
  
  export default PokemonCard;