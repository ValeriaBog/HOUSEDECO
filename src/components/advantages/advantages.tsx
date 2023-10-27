import React from 'react';
import {Title} from "../styles/title.styled";
import {theme} from "../styles/Theme.styled";
import styled from "styled-components";
import {Advantage} from "./advantage/advantage";
import s from './advantages.module.css'
export const Advantages = () => {

    return (
        <StyledContainer>
                <Title firstPartText={{color: `${theme.colors.secondaryColor}`, text: 'НАШИ ПРЕИМУЩЕСТВА -'}}
                       secondPartText={{color: `${theme.colors.accentColor}`, text: 'ВАШ РЕЗУЛЬТАТ'}}
                       textSize={'40px'}
                       width={'500px'}
                       textAlign={'center'}
                />
            <StyledRow>
                <StyledColumn>
                    <Advantage color={theme.colors.secondaryColor}
                               text={'Новейшее итальянское оборудование Donaton'}
                               width={'283px'}
                               textSize={'20px'}
                               side={'left'}
                               number={'01'}/>
                    <Advantage color={theme.colors.secondaryColor}
                               text={'Собственное произодство'}
                               width={'283px'}
                               textSize={'20px'}
                               side={'left'}
                               number={'02'}/>
                    <Advantage color={theme.colors.secondaryColor}
                               text={'Широкий ассортимент'}
                               width={'283px'}
                               textSize={'20px'}
                               side={'left'}
                               number={'03'}/>
                </StyledColumn>
                <div className={s.image}></div>
                <StyledColumn>
                    <Advantage color={theme.colors.secondaryColor}
                               text={'Консультации по уходу за изделием из камня'}
                               width={'283px'}
                               textAlign={'right'}
                               textSize={'20px'}
                               side={'right'}
                               number={'04'}/>
                    <Advantage color={theme.colors.secondaryColor}
                               text={'Работаем под ключ'}
                               width={'283px'}
                               textAlign={'right'}
                               textSize={'20px'}
                               side={'right'}
                               number={'05'}/>
                    <Advantage color={theme.colors.secondaryColor}
                               text={'Изделия из камня'}
                               width={'283px'}
                               textAlign={'right'}
                               textSize={'20px'}
                               side={'right'}
                               number={'06'}/>
                </StyledColumn>
            </StyledRow>

        </StyledContainer>

    );
};
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`
const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 100px;
`
const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`


