import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:rgb(51, 48, 48);
  }

  body {
    font-family: Arial, sans-serif;
    // background-color:rgb(51, 48, 48);
    padding: 2rem;
  }
`;
