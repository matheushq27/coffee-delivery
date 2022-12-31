import { MapPin, ShoppingCart } from 'phosphor-react'
import { BoxIcon, CounterCart, Location, LocationTitle, ContainerActions } from './styles'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/img/coffee-delivery-logo.svg'

export function Header() {
  return (
    <Navbar bg="white" expand="lg" className="mb-5">
      <Container>
        <Navbar.Brand href="/"><img src={coffeeDeliveryLogo} /></Navbar.Brand>
        <ContainerActions>
          <Location>
            <MapPin size={24} weight="fill" />
            <LocationTitle>Cuiabá, MT</LocationTitle>
          </Location>
          <NavLink to="/" title="Shopping Cart">
            <BoxIcon>
              <ShoppingCart size={24} weight="fill" />
              <CounterCart>3</CounterCart>
            </BoxIcon>
          </NavLink>
        </ContainerActions>
      </Container>
    </Navbar>
  )
}
