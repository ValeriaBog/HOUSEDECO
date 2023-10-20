import styled from "styled-components";
import React, {FC} from 'react';


export const Title: FC<TitleProps> = ({firstPartText,
                                          secondPartText,
                                          textSize,
                                          width,
                                          textAlign}) => {
    return (
        <StyledTitle textSize={textSize} width={width} textAlign={textAlign}>
            <StyledFirstPartText color={firstPartText.color}>{firstPartText.text} </StyledFirstPartText>
            {secondPartText && <StyledSecondPartText color={secondPartText.color}>{secondPartText.text}</StyledSecondPartText>}
        </StyledTitle>
    );
};


export const StyledTitle = styled.div<StyledTitle>`
  font-size: ${props => props.textSize};
  width: ${props => props.width};
  text-align: ${props => props.textAlign};
`
export const StyledFirstPartText = styled.span<StyledFirstPartText>`
  color: ${props => props.color};
`
export const StyledSecondPartText = styled.span<StyledSecondPartText>`
  color: ${props => props.color};
`
type StyledTitle={
    textSize: string
    width?: string
    textAlign?:string
}
type StyledFirstPartText = {
    color: string
}
type StyledSecondPartText = {
    color: string
}

type TitleProps = {
    firstPartText: {
        color:string,
        text: string
    }
    secondPartText?: {
        color:string,
        text: string
    }
    textSize: string
    width?: string
    textAlign?:string
}