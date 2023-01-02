import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { BoxIconMap, BoxInfos, BoxInfosDelivery, BoxInfosTwo, BoxItems, BoxIconClock, BoxIconMoney } from './styles'
import DeliveryMan from '../../assets/img/deliveryman.png'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

export function Success(){
    return(
        <Container>
            <Row>
              <Col className="mb-3" sm={12} md={4} lg={4} xl={4} xxl={4}>
                <BoxInfos className="mb-3">
                    <h4>Uhu! Pedido confimardo</h4>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </BoxInfos>
                <BoxInfosDelivery>
                    <BoxInfosTwo className="bg-white p-3">
                        <BoxItems className="mb-4">
                            <BoxIconMap>
                              <MapPin size={24} />
                            </BoxIconMap>
                            <p className="m-0">Entrega em Rua joão Daniel Martineli, 102</p>
                        </BoxItems>

                        <BoxItems className="mb-4">
                            <BoxIconClock>
                              <Clock size={24} />
                            </BoxIconClock>
                            <p className="m-0">Previsão de entrega 20 min - 30 min</p>
                        </BoxItems>

                        <BoxItems>
                            <BoxIconMoney>
                              <CurrencyDollar size={24} />
                            </BoxIconMoney>
                            <p className="m-0">Pagamento na entrega Cartão de Crédito</p>
                        </BoxItems>
                    </BoxInfosTwo>
                </BoxInfosDelivery>
              </Col>
              <Col className="mb-3 text-center" sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <img src={DeliveryMan} className="w-100" />
              </Col>
            </Row>
        </Container>
    )
}