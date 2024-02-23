import Select from 'react-select'
import { Button, Input, InputGroup, Navbar, NavbarBrand } from 'reactstrap'

export const NavBar = ({ pokelogo, setSearchValue, setFilterValue }) => {
  const options = [
    { value: 'fire', label: 'Fuego' },
    { value: 'grass', label: 'Planta' },
    { value: 'water', label: 'Agua' },
    { value: 'electric', label: 'Eléctrico' },
    { value: 'normal', label: 'Normal' },
    { value: 'flying', label: 'Volador' },
    { value: 'poison', label: 'Veneno' },
    { value: 'ground', label: 'Tierra' },
    { value: 'rock', label: 'Roca' },
    { value: 'fighting', label: 'Lucha' },
    { value: 'psychic', label: 'Psíquico' },
    { value: 'bug', label: 'Bicho' },
    { value: 'ice', label: 'Hielo' },
    { value: 'ghost', label: 'Fantasma' },
    { value: 'dragon', label: 'Dragón' },
    { value: 'dark', label: 'Siniestro' },
    { value: 'steel', label: 'Acero' },
    { value: 'fairy', label: 'Hada' }
  ]

  return (
    <Navbar
      fixed='top'
      container={false}
      className='d-flex justify-content-around
      px-5'
      style={{ backgroundColor: '#f5f3ee' }}
      light
    >
      <NavbarBrand className='' href='/'>
        <img
          alt='logo'
          src={pokelogo}
          style={{
            height: 50,
            width: 120
          }}
        />
      </NavbarBrand>

      <div>
        <InputGroup>
          <Input
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Buscar pokemon'
          />
          <Button color='primary'>Buscar!</Button>
        </InputGroup>
      </div>
      <div>
        <Select
          isClearable={true}
          options={options}
          onChange={(e) => setFilterValue(e?.value || '')}
          placeholder='Filtrar por tipo'
        />
      </div>
    </Navbar>
  )
}
