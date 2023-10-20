import React from 'react';
import './App.css';
import {Header} from "../layout/header/header";
import {Main} from "../components/main/main";
import {StyledContainer} from "../layout/container/container";
import {Title} from "../components/styles/title.styled";
import {Advantages} from "../components/advantages/advantages";

function App() {
    return (
        <div>
            <StyledContainer>
                <Header/>
                <Main/>
            </StyledContainer>
            <StyledContainer>
                <Advantages/>
            </StyledContainer>
        </div>
    );
}

export default App;
