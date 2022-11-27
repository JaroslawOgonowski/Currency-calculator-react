import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"
export const GlobalStyle = createGlobalStyle`
html {
  background-color: ${({theme})=> theme.color.backgroundBlack};
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}
`