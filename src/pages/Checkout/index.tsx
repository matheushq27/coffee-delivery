import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import { CardCheckout, BoxDeliveryAddress, FormInput, CreditCardButton, SelectedCoffee, BoxSelectedCoffeeItems, BoxSelectedCoffeeItemsImg, BoxSelectedCoffeeItemsActions, RemoveCoffeeBurron, DivisionOfSelectedCoffeeItems } from './styles'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus } from 'phosphor-react'
import { BoxCounter } from '../Home/sections/coffeeList/styles'

import traditionalExpress from '../../assets/img/traditionalExpress.png'

export function Checkout(){
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
                      <Col className="mb-3" sm={12} xxl={4}>
                        <FormInput className="p-3" placeholder="CEP" type="text"/>
                      </Col>
                      <Col className="mb-3" xxl={12}>
                        <FormInput className="p-3" placeholder="Rua" type="text"/>
                      </Col>
                      <Col className="mb-3" sm={12} xxl={4}>
                        <FormInput className="p-3" placeholder="Número" type="text"/>
                      </Col>
                      <Col className="mb-3" sm={12} xxl={8}>
                        <FormInput className="p-3" placeholder="Complemento" type="text"/>
                      </Col>
                      <Col className="mb-3" sm={12} xxl={4}>
                        <FormInput className="p-3" placeholder="Bairro" type="text"/>
                      </Col>
                      <Col className="mb-3" sm={12} xxl={6}>
                        <FormInput className="p-3" placeholder="Cidade" type="text"/>
                      </Col>
                      <Col className="mb-3" sm={12} xxl={2}>
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
                    <Col className="mb-3" sm={12} md={3} xxl={4}>
                      <CreditCardButton className="p-3">
                        <CreditCard size={20} />
                        <span>Cartão de Crédito</span>
                      </CreditCardButton>
                    </Col>

                    <Col className="mb-3" sm={12} md={3} xxl={4}>
                      <CreditCardButton className="p-3">
                        <Bank size={20} />
                        <span>Cartão de Débito</span>
                      </CreditCardButton>
                    </Col>

                    <Col className="mb-3" sm={12} md={3} xxl={4}>
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
                  <Row>
                  
                    <Col sm={12} xxl={9} className="mb-3">
                      <BoxSelectedCoffeeItems>
                        <BoxSelectedCoffeeItemsImg>
                          <img src={traditionalExpress} />
                        </BoxSelectedCoffeeItemsImg>
                        <BoxSelectedCoffeeItemsActions>
                          <p className="mb-1">Expresso Tradicional</p>
                          <div className="d-flex align-items-center">

                            <BoxCounter className="p-2 w-100">
                              <button><Minus size={20} weight="fill" /></button>
                              <span className="ms-2 me-2">1</span>
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
                      <span className="fw-bold fs-5">R$ 9,90</span>
                    </Col>
                    <DivisionOfSelectedCoffeeItems className="mt-2 mb-3" />
                  </Row>
                  </Container>
                </CardCheckout>
              </Col>
            </Row>
        </Container>
    )
}