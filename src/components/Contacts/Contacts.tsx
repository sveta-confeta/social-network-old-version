import React from 'react';
import s from './Contacts.module.css'
import {СontactsPropsType} from "./ContactsContainer";
import  axios from "axios";
import userPfoto from './../../img/User-PNG-Icon.png' // userPfoto потом используем как переменную


export const Contacts = (props: СontactsPropsType) => {
    if(props.contacts.contact.length===0){  //если контактов нет на странице, тогда...
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
            debugger //дебагером можем увидеть то что приходит в response .данные в data.
            props.setUsers(response.data.items); //этот путь к обьекту с данными мы увидели через дебагер
        });


    }

    const unfollowHandler=(userID:string)=>{
        props.unfollow(userID)
    }

    const followHandler=(userID:string)=>{
        props.follow(userID)
    }
    return (
        <div>
            {
                props.contacts.contact.map(m => <div className={s.bodyContacts} key={m.id}>
                        <div className={s.icon}>
                            <img className={s.ava} src={m.photos.small !== null ? m.photos.small : userPfoto}/> <br/>
                            {m.followed ? <button onClick={()=>unfollowHandler(m.id)}>Unfolow</button>: <button onClick={()=>followHandler(m.id)}>Follow</button> }

                        </div>

                        <div className={s.info}>
                            <div className={s.infoText}>
                                <div className={s.nameUser}>{m.name}</div>
                                <p className={s.status}>{m.status}</p>
                            </div>

                            <div className={s.country}>{'m.location.coutntry'}</div>
                            <div className={s.city}>{'m.location.city'}</div>

                        </div>

                    </div>
                )}
        </div>
        )};

