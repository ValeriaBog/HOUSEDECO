import React from 'react';
import styled, {css} from "styled-components";

type ContainerProps = {
    width?: string
    height?: string
}

export const StyledContainer = styled.div<ContainerProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100vh'};
  
`
