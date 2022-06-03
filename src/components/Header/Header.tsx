import React from "react";
import s from './Header.module.css';
import picture from './../../images/logo.png'
import {NavLink} from "react-router-dom";

type HeaderPropsType={
    isAuth:boolean
    login:string | null
    LoginOutThunkCreator:()=>void

}


export const Header = (props:HeaderPropsType) => {
    const logautHandler=()=>{
        props.LoginOutThunkCreator();
    }
    return (
        <header className={s.header}>
            <div className={s.logoWrapper}>
            <img className={s.logo} src={picture} width="100" height="auto"/>
            <span className={s.text}> MOTO-FRIENDS </span>
            </div>

            <div className={s.loginWrapper}>
                {props.isAuth ? <div className={s.loginName}> {props.login} <button onClick={logautHandler}>Logaut</button></div>
               : <NavLink  className={s.login} to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}