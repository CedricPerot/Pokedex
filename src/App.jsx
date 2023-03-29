import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
const pokemon = [
  {
      id : "1",
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id : "2",
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      id : "3",
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      id : "4",
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      id : "5",
      name: "mew",
    },
  ];

function App() {
  
  const [count, setCount] = useState(0);

  const handleNext = () => {
    setCount(count + 1);
  }
  
  const handlePrevious = () => {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <PokemonCard name = {pokemon[count].name} imgSrc = {pokemon[count].imgSrc}/>
      <div>
            {count > 0 ? <button onClick = {handlePrevious} className="button">Previous</button> : <button className="button">Stop</button>}
            {count < pokemon.length - 1 ? <button onClick = {handleNext} className="button">Next</button> : <button className="button">Stop</button>}
      </div>
    </div>
    );
  
}


export default App
