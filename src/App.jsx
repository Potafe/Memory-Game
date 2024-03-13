import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [pokemon, setPokemon] = useState([])
  const [visited, setVisited] = useState([])
  const [score, setScore] = useState(0)
  const [hiScore, setHiScore] = useState(0)

  const knuthShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
  }

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        const data = await response.json()
        setAllPokemon(data.results)
        setPokemon(knuthShuffle(data.results.slice(0, 20)))
      } catch (error) {
        console.log('ERROR IN LOADING POKEMON DATA')
      }
    }
    fetchPokemonData();
  }, [])

  const reset = () => {
    setScore(0)
    setVisited([])
    setPokemon(knuthShuffle(allPokemon.slice(0, 20)))
  }
  
  const clicked = (pokemonCard) => {
    if (visited.indexOf(pokemon) === -1) {
      setVisited((prev) => [...prev, pokemonCard])
      setScore((prev) => prev + 1)
      setPokemon(knuthShuffle(pokemon))
    } else {
      if (hiScore < score) {
        setHiScore(score)
      }

      reset();
    }
  }

  return (
    <>
      <div className='Main-App'>
      </div>
    </>
  )
}

export default App
