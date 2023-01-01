import styled from "styled-components"

export const CoffeeListCard = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  padding: 1rem;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  img{
    margin-top: -40px;
  }
`

export const CoffeeTag = styled.span`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 15px;
  text-align: center;
  font-size: 0.75rem;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
`

export const CoffeeListCardBody = styled.div`
  text-align: center;
`

export const CoffeeListCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;

  span strong{
    font-family: 'Fredoka One', sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-700']};
  }
`
export const BoxCounter = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 5px;
  button{
    padding: 0;
    border: none;
    color: ${(props) => props.theme['purple-dark']};
    background-color: transparent;
  }
`

export const ButtonIcon = styled.button`
  background-color: ${(props) => props.theme['purple-dark']};
  padding: 0;
  border-radius: 5px;
  border: none;
`