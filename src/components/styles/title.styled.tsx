import styled from "styled-components";

type TextProps = {
    color?: string
}

export  const Text = styled.span<TextProps>`
color: ${props=>props.color || '#ABB3BA'};
`
