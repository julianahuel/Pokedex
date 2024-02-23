import * as React from 'react'
// import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App'
import axios from 'axios'
const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0'
    )
    const pokemonList = response.data.results
    const detailedPokemonList = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const detailedPokemonResponse = await axios.get(pokemon.url)
        return {
          id: detailedPokemonResponse.data.id,
          name: detailedPokemonResponse.data.name,
          types: detailedPokemonResponse.data.types,
          weight: detailedPokemonResponse.data.weight,
          species: detailedPokemonResponse.data.species,
          moves: detailedPokemonResponse.data.moves.splice(0, 15),
          imageUrl:
            detailedPokemonResponse.data.sprites?.other?.home?.front_default ||
            detailedPokemonResponse.data.sprites?.other?.home?.front_shiny //validacion por si no encuentra una imagen que ponga otra
        }
      })
    )
    return detailedPokemonList
  } catch (error) {
    console.error('Error al obtener los datos:', error)
  }
}
fetchData().then((data) => {
  createRoot(document.getElementById('root')).render(<App pokemonData={data} />)
})
