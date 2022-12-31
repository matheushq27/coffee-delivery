import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


import { CoffeeListCard, CoffeeListCardBody, CoffeeTag, CoffeeListCardFooter, BoxCounter, ButtonIcon } from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { Api } from '../../../../Api'



export function CoffeeList(){
    return(
      <Container>
        <h3 className="text-start mb-5">Nossos cafés</h3>
        <Row>
            {
                Api.map((info)=>{
                    return(
                        <Col sm={12} md={6} lg={4} xl={3} xxl={3} className="text-center mb-5" key={info.id}>
                        <CoffeeListCard>
                            <div className="mb-4">
                            <img src={`src/assets/img/${info.thumbnail}`} />
                            </div>
                            <CoffeeTag className="mb-2">{info.tags[0]}</CoffeeTag>
                            <CoffeeListCardBody className="mt-4">
                            <h5 className="mb-2">{info.name}</h5>
                            <p className="mb-4 title-gray-600">{info.description}</p>
                            </CoffeeListCardBody>
                            <CoffeeListCardFooter>
                                <span>R$<strong> {info.price}</strong></span>
                                <BoxCounter className="p-2">
                                <button><Minus size={20} weight="fill" /></button>
                                <span className="ms-2 me-2">1</span>
                                <button><Plus size={20} weight="fill" /></button>
                                </BoxCounter>
                                <ButtonIcon className="p-2 text-white">
                                <ShoppingCart size={20} weight="fill" />
                                </ButtonIcon>
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