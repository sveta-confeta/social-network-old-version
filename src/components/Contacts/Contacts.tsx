import React from 'react';
import s from './Contacts.module.css'
import {СontactsPropsType} from "./ContactsContainer";
import {v1} from "uuid";


export const Contacts = (props: СontactsPropsType) => {
    if(props.contacts.contact.length===0){  //если контактов нет на странице, тогда...
        props.setUsers([
            {
                id: v1(),
                fotoIcon:'https://sun9-1.userapi.com/c855724/v855724535/15854/dHNLGjoiM_0.jpg',
                followed: true,
                fullName: 'Dmitry',
                status: 'I am boss',
                location: {city: 'Tbilisi', coutntry: 'Gorgia'}
            },
            {
                id: v1(),
                fotoIcon:'https://sun9-1.userapi.com/c855724/v855724535/15854/dHNLGjoiM_0.jpg',
                followed: true,
                fullName: 'Sveta',
                status: 'I am junior',
                location: {city: 'Minsk', coutntry: 'Belarus'}
            },
            {
                id: v1(),
                fotoIcon:'https://sun9-1.userapi.com/c855724/v855724535/15854/dHNLGjoiM_0.jpg',
                followed: true,
                fullName: 'Olga',
                status: 'I am fine',
                location: {city: 'Varshava', coutntry: 'Polska'}
            },
            {
                id: v1(),
                fotoIcon:'https://sun9-1.userapi.com/c855724/v855724535/15854/dHNLGjoiM_0.jpg',
                followed: false,
                fullName: 'Natasha',
                status: 'Shit happens',
                location: {city: 'Moskow', coutntry: 'Rasha'}
            },
        ])

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
                            <img src={m.fotoIcon}/>
                            {m.followed ? <button onClick={()=>unfollowHandler(m.id)}>Unfolow</button>: <button onClick={()=>followHandler(m.id)}>Follow</button> }

                        </div>

                        <div className={s.info}>
                            <div className={s.infoText}>
                                <div className={s.nameUser}>{m.fullName}</div>
                                <p className={s.status}>{m.status}</p>
                            </div>

                            <div className={s.country}>{m.location.coutntry}</div>
                            <div className={s.city}>{m.location.city}</div>

                        </div>

                    </div>
                )}
        </div>
        )};

