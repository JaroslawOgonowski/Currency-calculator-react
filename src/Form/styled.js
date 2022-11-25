import styled, { css } from "styled-components";

export const FormFieldset = styled.fieldset`
border: solid hsl(34, 86%, 40%);

@media (max-width: 767px) {
        margin: 20px;    
    }
`;

export const FormLegend = styled.legend`
padding: 12px;
`;

export const FormLabel = styled.span`
    max-width: 200px;
    width: 100%;
    display: inline-block;
    margin-right: 10px;
    text-align: center;
    padding-top: 15px;
`;
export const FormInput = styled.input`
    padding: 10px;
    width: 60%;
    border: solid rgb(228, 169, 39) 2px;

    &:hover{
        padding: 10px;
        width: 60%;
        border: solid hsl(34, 86%, 40%) 2px;
        background-color: rgb(224, 240, 250);
    }

    &&{
    ${({readOnly}) => readOnly && css`
    padding: 10px;
    width: 60%;
    background-color: rgb(236, 225, 195);
    text-align: center;
    border: solid hsl(34, 86%, 40%) 2px;
    cursor: not-allowed;
    `}}
`;

export const FormSecect = styled.select`
    padding: 10px;
    width: 60%;
    border: solid hsl(34, 86%, 40%) 2px;

    &:hover{
        padding: 10px;
        width: 60%;
        border: solid rgb(49, 75, 190) 2px;
        background-color: rgb(224, 240, 250);
        cursor: pointer;
    }

    @media (max-width: 767px) {   
        font-size: 12px;
    }
`;

export const FormButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    border: none;
    width: 80%;
    padding: 20px;
    background-color: hsl(34, 86%, 40%);
    font-weight: 800;
    color: rgba(22, 22, 29, 0.767);
    transition: 1s;

    &:hover {
        background-color: hsl(34, 86%, 50%);
        color: rgba(22, 22, 29, 0.767);
        transform: scale(1.05);
        cursor: pointer;
}

    &:active {
        background-color: hsl(0, 0%, 100%);
        color: rgba(22, 22, 29, 0.767);
}
`;
