import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--gray-600);
    color: var(--white)
  }
  
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', sans-serif;
  }

  :root{
    --white: #F8F8F2;
    --pink: #FF79C6;
    --gray-300: #44475A;
    --gray-600: #383a59;
    --gray-900: #282A36;
  }
`
