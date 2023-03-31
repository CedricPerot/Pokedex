import './App.css'
import PokemonCard from "./components/PokemonCard"
import { useState } from 'react';
import NavBar from './components/NavBar';

const pokemonList = [
  {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "Mew",
    },
  ]; 

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (<div>
    <div className="pokeball">
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </div>
    <div>
      <NavBar setPokemonIndex={setPokemonIndex} pokemonIndex={pokemonIndex} pokemonList={pokemonList}/>
    </div>
    </div>
  )
}



export default App;