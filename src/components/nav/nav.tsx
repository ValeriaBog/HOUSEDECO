import styled from "styled-components";

import React from 'react';
import {Link} from "react-router-dom";

export const Nav = () => {
    return (
        <StyledNav>
            <Link to={''}>Каталог</Link>
            <Link to={''}>Акции</Link>
            <Link to={''}>Блог</Link>
            <Link to={''}>Сотрудничество</Link>
            <Link to={''}>Оплата и доставка</Link>
        </StyledNav>
    );
};


export const StyledNav = styled.nav`
  display: flex;
  width: 600px;
  justify-content: space-around;
  margin-right: 40px;
  gap: 10px;
  font-size: 18px;

  & > a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transition: color 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 430px) {
    margin-right: 0;
  }
`



