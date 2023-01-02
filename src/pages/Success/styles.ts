import styled from "styled-components"

export const BoxInfos = styled.div`
  h4{
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const BoxInfosDelivery = styled.div`
  background-image: linear-gradient(to right, ${(props) => props.theme['yellow-primary']} , ${(props) => props.theme['purple-main']});
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 1px;
`
export const BoxInfosTwo = styled.div`
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-color: transparent;
`
export const BoxItems = styled.div`
    padding: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
`
const BaseBoxIcon = styled.span`
    color: #fff;
    border-radius: 999px;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const BoxIconMap = styled(BaseBoxIcon)`
    background-color: ${(props) => props.theme['purple-main']};
`
export const BoxIconClock= styled(BaseBoxIcon)`
    background-color: ${(props) => props.theme['yellow-primary']};
`
export const BoxIconMoney = styled(BaseBoxIcon)`
    background-color: ${(props) => props.theme['yellow-dark']};
`