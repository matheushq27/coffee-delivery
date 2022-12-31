import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :focus{
        outline: 0;
        box-shadow: 0;
    }

    body{
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'Fredoka One', sans-serif;
    }

    .title-gray-600{
        color: ${(props) => props.theme['gray-600']};
    }
`
