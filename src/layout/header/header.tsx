import React from 'react';
import {Nav} from "../../components/nav/nav";
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import s from './header.module.css'
import {theme} from "../../components/styles/Theme.styled";
import {ContactsHeader} from "../../components/contacts-header/contacts-header";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: ${theme.colors.gradientBackground};
  z-index: 999;
`
const StyledContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`
export const Header = () => {
    return (
        <>
                <StyledHeader>
                    <Logo className={s.logo}/>
                    <StyledContainer>
                        <ContactsHeader/>
                        <Nav/>
                    </StyledContainer>
                </StyledHeader>


        </>

    );
};

