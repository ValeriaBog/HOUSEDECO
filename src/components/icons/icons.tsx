import React, {FC} from 'react';
import iconsSprite from '../../assets/icons-sprit.svg'
import styled from "styled-components";

export const Icons: FC<IconsProps> = ({iconId, width='20', height='20', viewBox='0 0 17 16'}) => {
    return (
        <div>
            <StyledSvg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${iconId}`}/>
            </StyledSvg>
        </div>
    );
};

const StyledSvg= styled.svg`
  &>use{
    width: 25px;
    height: 25px;
  }
`

type IconsProps={
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}