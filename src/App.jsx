import './App.css'
import PokemonCard from "./components/PokemonCard"
import Pokemons from "./components/Pokemons"
import { useState } from 'react';
import NavBar from './components/NavBar';

// const pokemonList = [
//   {
//       name: "Bulbasaur",
//       imgSrc:
//         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//     },
//     {
//       name: "Charmander",
//       imgSrc:
//         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
//     },
//     {
//       name: "Squirtle",
//       imgSrc:
//         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
//     },
//     {
//       name: "Pikachu",
//       imgSrc:
//         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
//     },
//     {
//       name: "Mew",
//       imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
//     },
//   ]; 

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (<div>
    <div className="pokeball">
      <PokemonCard pokemon={Pokemons[pokemonIndex]}/>
    </div>
    <div>{Pokemons.map((pokemonIndex, index) =>
      <NavBar setPokemonIndex={setPokemonIndex} pokemonIndex={pokemonIndex} index={index}/>)}
    </div>
    </div>
  )
}



export default App;