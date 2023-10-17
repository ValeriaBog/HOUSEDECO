import styled from "styled-components";
import {theme} from "./Theme.styled";

export const Modal = styled.div`
  max-width: 400px;
  height: 70vh;
  border-radius: 10px;
  padding: 30px;
  background-color: #fff;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  margin-top: 80px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
  }

  & > div > div {
    display: flex;
    gap: 20px;
  }
  
  @media ${theme.media.tablet}{
    
  }
`