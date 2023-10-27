import styled from "styled-components";

type ContainerProps = {
    width?: string
    height?: string
    margin?: string
}

export const StyledContainer = styled.div<ContainerProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100vh'};
  margin:  ${props => props.margin};
`
