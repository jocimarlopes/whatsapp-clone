import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    transition: background 0.4s, color 0.4s;

    overflow: hidden;
  }

  body::after {
    content: '';
    width: 100%;
    height: 125px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: -100;

    background: ${props =>
      props.theme.name === 'main' ? props.theme.colors.primary : 'transparent'};
  }

  html, body, #root {
    height: 100%;
  }


  body, button, input {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  ul, ol {
    list-style: none;
  }
`;
