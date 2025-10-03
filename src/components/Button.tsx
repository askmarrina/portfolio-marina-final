
import styled, {css} from "styled-components";
import {Theme} from "../styles/Theme.tsx";

type ButtonPropsType = {
    primary? : boolean;
    secondary? : boolean;
}

export const Button = styled.button<ButtonPropsType>`
    transition: transform .2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
    
    ${props => props.primary && css <ButtonPropsType>`
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: ${Theme.colors.linkColor};
        background-color: ${Theme.colors.tertiaryBg};
        border-radius: 18px;
        padding: 19px 57px;
        width: 230px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
    `}
    
    ${props => props.secondary && css <ButtonPropsType>`
        color: ${Theme.colors.tertiaryBg};
        background-color: ${Theme.colors.linkColor};
        border: 1px solid ${Theme.colors.tertiaryBg};
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
        font-size: 18px;
        border-radius: 18px;
        padding: 19px 57px;
        width: 230px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        
    `}
`

