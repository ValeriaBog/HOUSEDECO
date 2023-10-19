import React from 'react';
import styled from "styled-components";
import {Icons} from "../icons/icons";

export const Logo = () => {
    return (
        <div>
            {/*<StyledLogo/>*/}
            <Icons iconId={'tel'}/>
        </div>
    );
};

const StyledLogo = styled.div`
  width: 150px;
  height: 80px;
  margin-left: 40px;
  background-image: url("https://html.rometheme.pro/housedeco/image/logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`