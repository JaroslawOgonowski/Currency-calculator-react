import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"
export const GlobalStyle = createGlobalStyle`
html {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme})=> theme.color.black};
  background-image: url("${background}");
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
};

*, ::after, ::before {
  box-sizing: inherit;
};
`;