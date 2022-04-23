import React from 'react';
import s from "./Contacts.module.css";
import userPfoto from "../../img/User-PNG-Icon.png";
import {ContactsType} from "../../redux/contactsReducer";
import  {NavLink} from 'react-router-dom';
import axios from "axios";

type ContactsPresentationType = {
    changeActualPage: (page: number) => void
    unfollowHandler: (userID: string) => void
    followHandler: (userID: string) => void
    totalUsersCount: number
    pageSize: number
    actualPage: number
    contacts: Array<ContactsType>

}

export const ContactsPresentation = (props: ContactsPresentationType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);//так мы узнаем количество страниц на нашем сайте
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 3670 && i > 3650) { //условие чтобы сгенерировалось только 20 страниц
            pages.push(i);
        }
    }

    const followHandler=(userID:string)=>{
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`,{},{withCredentials:true,
        headers:{'API-KEY':'f3162e35-770f-487f-b065-e5df2b65ff7d'}}) //withCredentials в пост 3им параметром и ключ с сайта
            .then(response=>{
                debugger
                if (response.data.resultCode===0) { //сервер подтвердил что подписка произошла
                    debugger
                    props.followHandler(userID)
                }
            })

    }
    const  unfollowHandler=(userID:string)=>{
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/`+userID,{withCredentials:true,
            headers:{'API-KEY':'f3162e35-770f-487f-b065-e5df2b65ff7d'}})//withCredentials в делит и гет  2ым параметром
            .then(response=>{
                if (response.data.resultCode===0) { //сервер подтвердил что подписка произошла

                    props.unfollowHandler(userID)
                }
            })

    }

    return (
        // возращает то же самое что и функциональная компонента, только пропсы превращаются в this.props
        <div>
            <ul className={s.pagesUsers}>
                {pages.map((m, i) => <li key={i} onClick={() => props.changeActualPage(m)}
                                         className={props.actualPage === m ? s.page : ''}>{m}</li>)}

            </ul>
            {
                props.contacts.map((m,i) => <div className={s.bodyContacts} key={m.id}>
                        <div className={s.icon}>
                            {/*мы хотим нажимать на иконку(img) и переходить на отдельный профиль юзера*/}

                            <NavLink to={'/profile/'+ m.id}><img className={s.ava} src={m.photos.small !== null ? m.photos.small : userPfoto}/> </NavLink> <br/>

                            {m.followed ? <button onClick={() => unfollowHandler(m.id)}>Unfolow</button> :
                                <button onClick={() => followHandler(m.id)}>Follow</button>}

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
    );
};

