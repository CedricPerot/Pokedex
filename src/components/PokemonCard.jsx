import PropTypes from "prop-types";

const PokemonCard = ({pokemon}) => {
    return (
        <figure className="pokemon_card" >
            { pokemon.imgSrc ?
            <img src={pokemon.imgSrc} alt={pokemon.name} />
            :<p>???</p>
            }
            <figcaption className="pokename">{pokemon.name}</figcaption>
        </figure>);
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}




export default PokemonCard;