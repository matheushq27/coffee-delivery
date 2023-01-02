import { MapPin, ShoppingCart } from 'phosphor-react'
import { BoxIcon, CounterCart, Location, LocationTitle, ContainerActions } from './styles'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/img/coffee-delivery-logo.svg'
import { useOrders } from '../../contexts/useCoffeeOrders'

export function Header() {
  const { totalOrderItems } = useOrders()

  return (
    <Navbar bg="white" expand="lg" className="mb-5">
      <Container>
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} />
        </NavLink>
        <ContainerActions>
          <Location>
            <MapPin size={24} weight="fill" />
            <LocationTitle>Cuiabá, MT</LocationTitle>
          </Location>
          <NavLink to="/checkout" title="Shopping Cart">
            <BoxIcon>
              <ShoppingCart size={24} weight="fill" />
              {totalOrderItems > 0 &&
                <CounterCart>{totalOrderItems}</CounterCart>
              }
            </BoxIcon>
          </NavLink>
        </ContainerActions>
      </Container>
    </Navbar>
  )
}
