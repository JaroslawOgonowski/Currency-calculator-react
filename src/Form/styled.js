import styled, { css } from "styled-components";

export const Fieldset = styled.fieldset`
    border: solid ${({ theme }) => theme.color.pumpkinSkin};

    @media (max-width: ${({ theme }) => theme.breakPoint.square}px) {
        margin: 20px;    
    }
`;

export const Legend = styled.legend`
    padding: 12px;
`;

export const Label = styled.span`
    max-width: 200px;
    width: 100%;
    display: inline-block;
    margin-right: 10px;
    text-align: center;
    padding-top: 15px;
`;

export const Input = styled.input`
    padding: 10px;
    width: 60%;
    border: solid ${({ theme }) => theme.color.goldenrod} 2px;

    &:hover{
        padding: 10px;
        width: 60%;
        border: solid ${({ theme }) => theme.color.pumpkinSkin} 2px;
        background-color: ${({ theme }) => theme.color.almond};
    }

    &&{
    ${({ readOnly }) => readOnly && css`
        background-color: ${({ theme }) => theme.color.backgroundBlack};
        color: ${({ theme }) => theme.color.white} ;
        text-align: center;
        cursor: not-allowed;
    `}}
        
    ${({ as }) => as && css`
        cursor: pointer;
        @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
            font-size: 14px;
    }
    `}
`;

export const Button = styled.button`
    font-family: 'Montserrat', sans-serif;
    border: none;
    width: 80%;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.pumpkinSkin};
    font-weight: 800;
    color: ${({ theme }) => theme.color.blackGlass};
    transition: 1s;

    &:hover{
        filter: contrast(140%);
        color: ${({ theme }) => theme.color.blackGlass};
        transform: scale(1.05);
        cursor: pointer;
}

    &:active{
        background-color:${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.blackGlass};
}
`;
