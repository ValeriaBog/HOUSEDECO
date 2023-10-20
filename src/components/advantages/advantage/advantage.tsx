import React, {FC} from 'react';
import {Title} from "../../styles/title.styled";
import {theme} from "../../styles/Theme.styled";
import styled, {css} from "styled-components";
import {Icons} from "../../icons/icons";

export const Advantage: FC<AdvantageType> = ({
                                                 color,
                                                 text,
                                                 textSize,
                                                 width,
                                                 textAlign,
                                                 side,
    number
                                             }) => {
    return (
        <StyledAdvantage side={side}>
            <Title firstPartText={{color: `${color}`, text: `${text}`}}
                   textSize={`${textSize}`}
                   width={`${width}`}
                   textAlign={`${textAlign}`}
            />
            <button><Icons iconId={'arrow-result'}/></button>
            <span>{number}</span>
        </StyledAdvantage>
    );
};


const StyledAdvantage = styled.div<StyledAdvantage>`
  max-width: 300px;
  position: relative;
  margin-bottom: 60px;

  & > button {
    border: none;
    position: absolute;
    background-color: ${theme.colors.primaryColor};
    cursor: pointer;
    ${props=>props.side === 'left' && css<StyledAdvantage>`
      bottom: -37px;
  `}
    ${props=>props.side === 'right' && css<StyledAdvantage>`
      bottom: -40px;
      left: 95%;
  `}
  }

  &::before {
    position: absolute;
    content: '';
    background: ${theme.colors.accentColor};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    z-index: 1;
    ${props=>props.side === 'left' && css<StyledAdvantage>`
      bottom: -40px;;
      left: 100%;
  `}
    ${props=>props.side === 'right' && css<StyledAdvantage>`
      bottom: -41px;;
      left: -10%;
  `}
    
  }

  &>span {
    color: ${theme.colors.primaryColor};
    position: absolute;
    font-size: 18px;
    z-index: 2;
    ${props=>props.side === 'left' && css<StyledAdvantage>`
      bottom: -31px;
      left: 103.8%;
  `}
    ${props=>props.side === 'right' && css<StyledAdvantage>`
      bottom: -33px;;
      left: -6.5%;
  `}
  }
  
  &::after {
    width: 270px;
    height: 1px;
    background: ${theme.colors.accentColor};
    content: '';
    position: absolute;
    transform: translate(-50%, 50%);
    ${props=>props.side === 'left' && css<StyledAdvantage>`
      bottom: -22px;;
      left: 60%;
  `}
    ${props=>props.side === 'right' && css<StyledAdvantage>`
      bottom: -24px;;
      left: 40%;
  `}
  }
`
type AdvantageType = {
    color: string
    text: string
    textSize: string
    width: string
    textAlign?: string
    side: 'right' | 'left'
    number: string
}
type StyledAdvantage = Pick<AdvantageType, 'side'>