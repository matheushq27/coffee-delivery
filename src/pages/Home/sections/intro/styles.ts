import styled from "styled-components"

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
export const BoxIconCart = styled(BaseBoxIcon)`
    background-color: ${(props) => props.theme['yellow-dark']};
`
export const BoxIconCube = styled(BaseBoxIcon)`
    background-color: ${(props) => props.theme['gray-700']};
`
export const BoxIconClock = styled(BaseBoxIcon)`
    background-color: ${(props) => props.theme['yellow-primary']};
`
export const BoxIconCoffee = styled(BaseBoxIcon)`
    background-color: ${(props) => props.theme['purple-main']};
`