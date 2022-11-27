import styled, { css } from "styled-components";

export const StyledClock = styled.div`
    text-align: right;
    background-color: ${({theme})=> theme.color.transparentBlack};
    color: white;
    font-size: 14px;
`;