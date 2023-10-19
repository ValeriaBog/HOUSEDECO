import React from 'react';
import {Link} from "react-router-dom";
import {Nav} from "../../components/nav/nav";
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`



export const Header = () => {
    return (
        <>
            <StyledHeader>
                <Logo/>
                <Nav/>

            </StyledHeader>
        </>

    );
};

