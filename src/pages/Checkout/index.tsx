import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { 
  CardCheckout, 
  BoxDeliveryAddress, 
  FormInput, 
  CreditCardButton, 
  BoxValuesSelectedCoffees, 
  BoxSelectedCoffeeItems, 
  BoxSelectedCoffeeItemsImg, 
  BoxSelectedCoffeeItemsActions, 
  RemoveCoffeeBurron, 
  DivisionOfSelectedCoffeeItems,
  ConfirmOrderButton 
} from './styles'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus } from 'phosphor-react'
import { BoxCounter } from '../Home/sections/coffeeList/styles'

import traditionalExpress from '../../assets/img/traditionalExpress.png'
import { useOrders } from '../../contexts/useCoffeeOrders'
import { useEffect } from 'react'

export function Checkout(){

  const { orderInformation} = useOrders()

  function totalCoffes(){
    let total = 0
    orderInformation.map((objCoffee: any)=>{
      total += (objCoffee.price * objCoffee.quantity)
    })
    return total
  }

  function totalOrder(){
    let total = totalCoffes() + 3.5
    return total
  }

    return(
        <Container>
            <Row>
              <Col sm={12} xxl={7} className="mb-3">
                <h5 className="mb-5">Complete seu pedido</h5>
                <CardCheckout className="mb-3">

                  <BoxDeliveryAddress className="mb-4">
                    <span><MapPinLine size={24} /></span>
                    <div>
                      <p className="mb-1">Endereço de Entrega</p>
                      <p className="mb-2 title-gray-600">Informe o endereço onde receber seu pedido</p>
                    </div>
                  </BoxDeliveryAddress>

                  <form action="">
                    <Row>
                      <Col className="mb-3" sm={12} md={4} lg={4} xl={4} xxl={4}>
                        <FormInput className="p-3" placeholder="CEP" type="text"/>
                      </Col>
                      <Col className="mb-3" xxl={12}>
                        <FormInput className="p-3" placeholder="Rua" type="text"/>
                      </Col>
                      <Col className="mb-3" sm={12} md={4} lg={4} xl={4} xxl={4}>
                        <FormInput className="p-3" placeholder="Número" type="text"/>
                      </Col>
                      <Col className="mb-3" sm={12} md={8} lg={8} xl={8} xxl={8}>
                        <FormInput className="p-3" placeholder="Complemento" type="text"/>
                      </Col>
                      <Col className="mb-3" sm={12} md={4} lg={4} xl={4} xxl={4}>
                        <FormInput className="p-3" placeholder="Bairro" type="text"/>
                      </Col>
                      <Col className="mb-3" sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <FormInput className="p-3" placeholder="Cidade" type="text"/>
                      </Col>
                      <Col className="mb-3" sm={12} md={2} lg={2} xl={2} xxl={2}>
                        <FormInput className="p-3" placeholder="UF" type="text"/>
                      </Col>
                    </Row>
                  </form>

                </CardCheckout>

                <CardCheckout>
                  <BoxDeliveryAddress className="mb-4">
                    <span><CurrencyDollar size={24} /></span>
                    <div>
                      <p className="mb-1">Pagamento</p>
                      <p className="mb-2 title-gray-600">O pagamento é feito na enrega. Escolha a forma que deseja pagar</p>
                    </div>
                  </BoxDeliveryAddress>

                  <Row>
                    <Col className="mb-3" sm={12} md={4} lg={4} xl={4} xxl={4}>
                      <CreditCardButton className="p-3">
                        <CreditCard size={20} />
                        <span>Cartão de Crédito</span>
                      </CreditCardButton>
                    </Col>

                    <Col className="mb-3" sm={12} md={4} lg={4} xl={4} xxl={4}>
                      <CreditCardButton className="p-3">
                        <Bank size={20} />
                        <span>Cartão de Débito</span>
                      </CreditCardButton>
                    </Col>

                    <Col className="mb-3" sm={12} md={4} lg={4} xl={4} xxl={4}>
                      <CreditCardButton className="p-3">
                        <Money size={20} />
                        <span>Dinheiro</span>
                      </CreditCardButton>
                    </Col>
                  </Row>
                </CardCheckout>

              </Col>

           <Col sm={12} xxl={5} className="mb-3">
                <h5 className="mb-5">Cafés selecionados</h5>

                <CardCheckout>
                  <Container>
                    {
                      orderInformation.map((objCoffee: any)=>{
                          return(
                            <Row key={objCoffee.name}>
                              
                              <Col sm={12} xxl={9} className="mb-3">
                                <BoxSelectedCoffeeItems>
                                  <BoxSelectedCoffeeItemsImg>
                                    <img src={`src/assets/img/${objCoffee.thumbnail}`} />
                                  </BoxSelectedCoffeeItemsImg>
                                  <BoxSelectedCoffeeItemsActions>
                                    <p className="mb-1">{objCoffee.name}</p>
                                    <div className="d-flex align-items-center">

                                      <BoxCounter className="p-2 w-100">
                                        <button><Minus size={20} weight="fill" /></button>
                                        <span className="ms-2 me-2">{objCoffee.quantity}</span>
                                        <button><Plus size={20} weight="fill" /></button>
                                      </BoxCounter>

                                      <RemoveCoffeeBurron className="p-3 ms-2">
                                        <CreditCard size={20} />
                                        <span>Remover</span>
                                      </RemoveCoffeeBurron>

                                    </div>
                                  </BoxSelectedCoffeeItemsActions>
                                </BoxSelectedCoffeeItems>
                              </Col>
                              <Col sm={12} xxl={3} className="mb-3 text-center">
                                <span className="fw-bold fs-5">{objCoffee.price}</span>
                              </Col>
                              <DivisionOfSelectedCoffeeItems className="mt-2 mb-3" />
                            </Row>
                          )
                      })
                    }

                    <BoxValuesSelectedCoffees className="mb-1">
                      <div>Total de itens</div>
                      <div>R$ {totalCoffes()}</div>
                    </BoxValuesSelectedCoffees>

                    <BoxValuesSelectedCoffees className="mb-3">
                      <div>Entrega</div>
                      <div>R$ 3,50</div>
                    </BoxValuesSelectedCoffees>

                    <BoxValuesSelectedCoffees className="fw-bold fs-4 mb-4">
                      <div>Total</div>
                      <div>R$ {totalOrder()}</div>
                    </BoxValuesSelectedCoffees>

                  <ConfirmOrderButton className="p-2 w-100 text-white fs-5">
                    Confirmar Pedido
                  </ConfirmOrderButton>
                  </Container>
                </CardCheckout>
              </Col>
            </Row>
        </Container>
    )
}
