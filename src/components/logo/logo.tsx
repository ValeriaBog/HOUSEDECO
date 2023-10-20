import React, {FC} from 'react';
import s from './logo.module.css'

export const Logo: FC<LogoProps> = ({className}) => {

    const styles = `${s.logo} ${className} `

    return <div className={styles}></div>
};
type LogoProps={
    className: string
}