import { createGlobalStyle } from 'styled-components';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Rubik','Helvetica Neue', Helvetica, Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content:center;
    height: 100vh;
    background: rgb(2,0,36);
    background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(121,9,18,1) 37%, rgba(0,212,255,1) 100%);
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
