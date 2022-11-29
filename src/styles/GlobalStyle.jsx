import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto'
    }

    :root {
        --color-primary: #1C94FF;
        --color-white: #fff;
    }
`
export const theme = {
    color: {
      primary: '#1C94FF',
      white: '#fff',
      grey: '#e0dfdf',
    }
  }