import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Row,
  Spinner
} from 'reactstrap'
import pokelogo from '../../assets/pokelogo.png'
import axios from 'axios'

export const PokemonDetail = () => {
  let { state } = useLocation()
  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let objDetails = state.pokemonDetail
    axios.get(state.pokemonDetail?.species?.url).then((res) => {
      objDetails = {
        ...objDetails,
        descriptions: res.data.flavor_text_entries.filter(
          (el) => el.language.name == 'es'
        ),
        type: res.data.genera.find((el) => el.language.name == 'es').genus
      }
      setDetails(objDetails)
      setLoading(false)
    })
  }, [state])

  if (loading) {
    return (
      <div className='d-flex justify-content-center'>
        <Spinner />
      </div>
    )
  }

  return (
    <div className='m-1'>
      <div className='d-flex justify-content-between mb-3'>
        <Link to='/'>
          <img
            alt='logo'
            src={pokelogo}
            style={{
              height: 55,
              width: 150
            }}
          />
        </Link>
        <Link to='/'>
          <Button size='lg' color='primary'>
            Volver
          </Button>
        </Link>
      </div>
      <div>
        <Card
          style={{
            backgroundColor: '#FDFBF6'
          }}
          className='text-center'
        >
          <CardHeader>
            <CardTitle tag='h2' className='text-dark'>
              {details.name?.toUpperCase()}
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row className='d-flex justify-content-center gap-2 align-items-center'>
              <Col md='12' lg>
                <ListGroup className='justify-content-center '>
                  <ListGroupItem className=''>
                    <b>Tipo: </b> {details?.type}
                  </ListGroupItem>
                  <ListGroupItem>
                    <b>Peso: </b> {parseInt(details?.weight / 2.2)} kg
                  </ListGroupItem>
                  <ListGroupItem>
                    <Label for='exampleSelect'>
                      <b>Movimientos </b>
                    </Label>
                    <Input id='exampleSelect' name='select' type='select'>
                      {details?.moves?.map((el) => {
                        return (
                          <option key={el.move.name}>{el?.move?.name}</option>
                        )
                      })}
                    </Input>
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col>
                <img
                  style={{
                    width: '25rem'
                  }}
                  className='mx-5'
                  alt={details.name}
                  src={details.imageUrl}
                />
              </Col>
              <Col>
                <ListGroup className='justify-content-center align-items-center'>
                  <ListGroupItem
                    style={{
                      maxWidth: 280
                    }}
                  >
                    {details.descriptions
                      .splice(0, 3)
                      .map((el) => el.flavor_text)}
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
