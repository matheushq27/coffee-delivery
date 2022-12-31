import styled from "styled-components"

export const CardCheckout = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  padding: 1rem;
  border-radius: 15px;
  width: 100%;
`

export const BoxDeliveryAddress = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  display: flex;
  align-items: initial;
  gap: 0.5rem;

  span{
    color: ${(props) => props.theme['yellow-primary']};
  }
`

export const FormInput = styled.input`
  background-color: ${(props) => props.theme['gray-300']};
  width: 100%;
  border: 1px solid ${(props) => props.theme['gray-400']};
  height: 3rem;
  border-radius: 5px;
`

export const CreditCardButton = styled.button`
  background-color: ${(props) => props.theme['gray-400']};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme['purple-main']};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  width: 100%;
  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
  }
  span{
    color: ${(props) => props.theme['gray-700']};
  }
`

export const SelectedCoffee = styled.div`
  display: flex;
`

export const BoxSelectedCoffeeItems = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`

export const BoxSelectedCoffeeItemsImg = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  img{
    width: 100%;
  }
`

export const BoxSelectedCoffeeItemsActions = styled.div`
`

export const RemoveCoffeeBurron = styled.button`
  background-color: ${(props) => props.theme['gray-400']};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme['purple-main']};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  width: 100%;
  height: 2.5rem;
  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
  }
`

export const DivisionOfSelectedCoffeeItems = styled.hr`
  color: ${(props) => props.theme['gray-500']};
`