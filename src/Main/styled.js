import styled from "styled-components";

export const MainContent = styled.main`
    max-width: 800px;
    margin: auto;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: ${({theme})=> theme.color.mainFont};
    background-color: ${({theme})=> theme.color.backgroundBlack};
`;