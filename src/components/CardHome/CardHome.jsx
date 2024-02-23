import { Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'

export const CardHome = ({ info }) => {
  const emojisTypes = {
    fire: '🔥',
    grass: '🌿',
    water: '💧',
    electric: '⚡️',
    normal: '🐾',
    flying: '🦅',
    poison: '☠️',
    ground: '🏜️',
    rock: '🪨',
    fighting: '🥊',
    psychic: '🔮',
    bug: '🐛',
    ice: '❄️',
    ghost: '👻',
    dragon: '🐲',
    dark: '🌑',
    steel: '🛡️',
    fairy: '🧚'
  }
  return (
    <Card
      style={{
        width: '14rem',
        backgroundColor: '#FDFBF6'
      }}
      className='text-center'
    >
      <CardHeader>
        <CardTitle className='text-dark'>
          {info?.name?.charAt(0).toUpperCase() + info?.name?.slice(1)}
        </CardTitle>
      </CardHeader>
      <CardBody>
        <img
          style={{
            width: '11rem'
          }}
          alt={info.name}
          src={info.imageUrl}
        />
        <div className='d-flex justify-content-around gap-2'>
          <CardText>
            <b>Tipo: </b> <br />
            {info?.types
              ?.map((el) => emojisTypes[el.type.name] + el.type.name)
              .join(' ')}
          </CardText>
          <CardText>
            <b>Peso: </b> <br />
            {info.weight} lb
          </CardText>
        </div>
      </CardBody>
    </Card>
  )
}
