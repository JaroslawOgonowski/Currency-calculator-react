import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"
export const GlobalStyle = createGlobalStyle`
html {
  background-color: ${({theme})=> theme.color.black};
  background-image: url("${background}");
  background-position: 50% 20px;
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}
`