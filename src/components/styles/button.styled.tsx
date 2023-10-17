import styled, {css} from "styled-components";
import {theme} from "./Theme.styled";

type ButtonProps={
    color?: string
    btnType: 'primary' | 'outlined'
}

export const Button = styled.button<ButtonProps>`
  border: none;
  padding: 10px 25px;
  border-radius: 5px;
  font-size: large;
  font-weight: bolder;
  cursor: pointer;
  
  ${props=>props.btnType === 'outlined' && css<ButtonProps>`
    background-color: transparent;
    outline: 2px solid ${props=>props.color || theme.colors.primary};
    color: ${props=>props.color || theme.colors.primary};
  `}
  
  ${props=>props.btnType === 'primary' && css<ButtonProps>`
    background-color: ${props=>props.color || theme.colors.primary} ;
    color: #fff;
  `}
  
`
