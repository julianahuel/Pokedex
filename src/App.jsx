import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { PokemonDetail } from './components/Details/PokemonDetails'
import './index.css'

function App({pokemonData}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home pokemonData={pokemonData} />} />
        <Route path='/pokemon/:name' element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
