import styled from "styled-components"

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