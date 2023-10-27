import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme.styled";
import {Title} from "../styles/title.styled";

export const Products = () => {
    return (
        <StyledProducts>
            <Title firstPartText={{color: `${theme.colors.secondaryColor}`, text: 'ИЗДЕЛИЯ ИЗ'}}
                   secondPartText={{color: `${theme.colors.accentColor}`, text: 'НАТУРАЛЬНОГО КАМНЯ'}}
                   textSize={'40px'}
                   width={'500px'}
            />

        </StyledProducts>
    );
};

const StyledProducts = styled.div`
  background: #E5E8ED;
  width: 100%;
  height: 100%;
  padding: 20px;
`

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: [start] 250px [line2] 650px [line3] 600px [end];
  grid-template-rows: [row1-start] 15rem [row1-end] 30vh [last];
`

