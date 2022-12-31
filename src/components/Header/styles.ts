import styled from "styled-components"

export const BoxIcon = styled.span`
    background-color: ${(props) => props.theme['yellow-light']};
    padding: 0.5rem;
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 6px;
    position: relative;
`

export const CounterCart = styled.span`
    background-color: ${(props) => props.theme['yellow-dark']};
    padding: 0.5rem;
    color: #fff;
    border-radius: 999px;
    position: absolute;
    right: -10px;
    top: -10px;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
`

export const Location = styled.div`
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-main']};
    padding: 0.3rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
`

export const LocationTitle = styled.p`
    color: ${(props) => props.theme['purple-dark']};
    margin: 0;
`

export const ContainerActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`