import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  
*, *::before, *::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Raleway', sans-serif;
}
`