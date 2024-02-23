import { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row, Spinner } from 'reactstrap'
import { CardHome } from '../CardHome/CardHome'
import { Link } from 'react-router-dom'
import pokelogo from '../../assets/pokelogo.png'
import { NavBar } from '../NavBar/NavBar'

export const Home = ({ pokemonData }) => {
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filterValue, setFilterValue] = useState({})
  let result = []

  useEffect(() => {
    setData(pokemonData)
  }, [pokemonData])

  result = data
  if (searchValue.length) {
    result = result.filter((el) =>
      el.name.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  }
  if (filterValue.length) {
    result = result.filter((el) =>
      el.types.some((type) => type.type.name === filterValue)
    )
  }

  if (!data.length) {
    return (
      <div className='d-flex justify-content-center'>
        <Spinner />
      </div>
    )
  }

  return (
    <>
      <NavBar
        setSearchValue={setSearchValue}
        setFilterValue={setFilterValue}
        pokelogo={pokelogo}
      />
      <br />
      <Row className='mx-5 mt-5'>
        {result.map((el, index) => {
          return (
            <Col key={index} className='d-flex justify-content-center p-0 my-3'>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={`/pokemon/${el.name}`}
                state={{ pokemonDetail: el }}
              >
                <CardHome info={el} />
              </Link>
            </Col>
          )
        })}
      </Row>
    </>
  )
}
