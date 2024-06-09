import { createGlobalStyle } from "styled-components"

export const GlobolStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Overpass", sans-serif;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background: ${props => props.theme.homeBackground};

    height: 100svh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`