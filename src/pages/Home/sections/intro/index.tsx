import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { BoxItems, BoxIconCart, BoxIconClock, BoxIconCoffee, BoxIconCube } from './styles'

import BgCoffeeHome from '../../../../assets/img/bg-coffee-home.png'
import { Coffee, Cube, ShoppingCart, Timer } from 'phosphor-react';

export function Intro(){
    return(
        <Container className="mt-5 mb-5">
          <Row className="justify-content-center">
            <Col sm={12} xxl={6}>
              <h1 className="mb-4">Encontre o café perfeito para qualquer hora do dia</h1>
              <p className="fs-5 mb-5 mb-sm-2">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>
              <Row>
                <Col sm={12} xxl={6} className="text-center">
                  <BoxItems>
                    <BoxIconCart>
                      <ShoppingCart size={20} weight="fill" />
                    </BoxIconCart> 
                    <p className="m-0">Compra simples e segura</p>
                  </BoxItems>
                </Col>
                <Col sm={12} xxl={6} className="text-center">
                  <BoxItems>
                    <BoxIconCube>
                      <Cube size={20} weight="fill" /> 
                    </BoxIconCube> 
                    <p className="m-0">Embalagem mantém o café intacto</p>
                  </BoxItems>
                </Col>
                <Col sm={12} xxl={6} className="text-center">
                  <BoxItems>
                    <BoxIconClock>
                      <Timer size={20} weight="fill" /> 
                    </BoxIconClock> 
                    <p className="m-0">Entrega rápida e rastreada</p>
                  </BoxItems>
                </Col>
                <Col sm={12} xxl={6} className="text-center">
                  <BoxItems>
                    <BoxIconCoffee>
                      <Coffee size={20} weight="fill" /> 
                    </BoxIconCoffee> 
                    <p className="m-0">O café chega fresquinho até você</p>
                  </BoxItems>
                </Col>
              </Row>
            </Col>
            <Col sm={12} xxl={6} className="text-center"><img src={BgCoffeeHome} /></Col>
          </Row>
        </Container>
      )
}