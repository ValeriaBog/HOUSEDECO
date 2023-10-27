import React from 'react';
import {Icons} from "../icons/icons";
import styled from "styled-components";

export const ContactsHeader = () => {
    return (
        <StyledContainer>
            <a href="/"><Icons iconId={'whatsup'} /></a>
            <StyledSpan>
                <Icons iconId={'tel'}/>
                <a href="/">+7 (499) 258-625-33</a>
            </StyledSpan>
            <a href="/"><Icons iconId={'search'}/></a>
        </StyledContainer>
    );
};
const StyledContainer= styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 20px;
  margin-right: 50px;
`
const StyledSpan= styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5px;
`

