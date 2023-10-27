import React from 'react';
import './App.css';
import {Header} from "../layout/header/header";
import {Main} from "../components/main/main";
import {StyledContainer} from "../layout/container/container";
import {Advantages} from "../components/advantages/advantages";
import {Products} from "../components/products/products";

export const App = () => {
    return (
        <div>
            <StyledContainer>
                <Header/>
                <Main/>
            </StyledContainer>
            <StyledContainer>
                <Advantages/>
            </StyledContainer>
            <StyledContainer>
                <Products/>
            </StyledContainer>
        </div>
    );
}


