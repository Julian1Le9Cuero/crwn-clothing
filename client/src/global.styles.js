import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: "Open Sans Condensed", sans-serif;
    padding: 20px 60px;
    @media screen and (max-width: 800px){
        padding: 0;
    }
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  a:hover {
    color: rgba(103, 15, 219, 0.82);
  }
  
`;