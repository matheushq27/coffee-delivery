import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


import { CoffeeListCard, CoffeeListCardBody, CoffeeTag, CoffeeListCardFooter, BoxCounter, ButtonIcon } from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { Coffes, coffesType } from '../../../../Api'
import { useOrders } from '../../../../contexts/useCoffeeOrders'
import { ActionsFooter } from './components/counter'
import { useState } from 'react'


export function CoffeeList(){

    const { addToOrder, coffes } = useOrders()

    function createOrderObject(objCoffee: coffesType){
        addToOrder(objCoffee)
    }

    function updateQuantityCoffe(objCoffee: any, quantity: number){
        objCoffee.quantity = quantity
    }

    return(
      <Container>
        <h3 className="text-start mb-5">Nossos cafés</h3>
        <Row>
            {
                Coffes.map((objCoffee: any)=>{
                    return(
                        <Col sm={12} md={6} lg={4} xl={3} xxl={3} className="text-center mb-5" key={objCoffee.id}>
                        <CoffeeListCard>
                            <div className="mb-4">
                              <img src={`src/assets/img/${objCoffee.thumbnail}`} />
                            </div>
                            <CoffeeTag className="mb-2">{objCoffee.tags[0]}</CoffeeTag>

                            <CoffeeListCardBody className="mt-4">
                              <h5 className="mb-2">{objCoffee.name}</h5>
                              <p className="mb-4 title-gray-600">{objCoffee.description}</p>
                            </CoffeeListCardBody>

                            <CoffeeListCardFooter>
                                <span>R$<strong> {objCoffee.price}</strong></span>
                                <ActionsFooter click={updateQuantityCoffe} order={objCoffee} createOrderObject={createOrderObject} />
                            </CoffeeListCardFooter>
                        </CoffeeListCard>
                        </Col>
                    )
                })
            }
        </Row>
      </Container>
    )
}