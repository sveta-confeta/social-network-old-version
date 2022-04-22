import React from "react";
import s from './Header.module.css';
import picture from './../../images/logo.png'
import {NavLink} from "react-router-dom";


export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logoWrapper}>
            <img className={s.logo} src={picture} width="100" height="auto"/>
            <span className={s.text}> MOTO-FRIENDS </span>
            </div>
            <div className={s.loginWrapper}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    )
}