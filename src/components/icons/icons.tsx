import React, {FC} from 'react';
import iconsSprite from '../../assets/icons-sprit.svg'

export const Icons: FC<IconsProps> = ({iconId, width='20', height='20', viewBox='0 0 17 16'}) => {
    return (
        <div>
            <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${iconId}`}/>
            </svg>
        </div>
    );
};

type IconsProps={
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}