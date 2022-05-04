import React from 'react';
import s from "./Contacts.module.css";
import userPfoto from "../../img/User-PNG-Icon.png";
import {ContactsType} from "../../redux/contactsReducer";
import {NavLink} from 'react-router-dom';
import {followApi, unfollowApi} from "../../api/api";

type ContactsPresentationType = {
    changeActualPage: (page: number) => void
    unfollowHandler: (userID: string) => void
    followHandler: (userID: string) => void
    totalUsersCount: number
    pageSize: number
    actualPage: number
    contacts: Array<ContactsType>
    followButtonActive: string[],
    buttonTrueDisabled:(userID:string)=>void
    buttonFalseDisabled:(userID:string)=>void


}

export const ContactsPresentation = (props: ContactsPresentationType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);//так мы узнаем количество страниц на нашем сайте
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 3670 && i > 3650) { //условие чтобы сгенерировалось только 20 страниц
            pages.push(i);
        }
    }

    const followHandler = (userID: string) => {
        props.buttonTrueDisabled(userID) //кнопка активна перед запросом
        followApi(userID)
            .then(data => {
                if (data.resultCode === 0) { //сервер подтвердил что подписка произошла
                    props.followHandler(userID)
                }
                props.buttonFalseDisabled(userID) //кнопка disabled после запроса
            })


    }
    const unfollowHandler = (userID: string) => {
        props.buttonTrueDisabled(userID) //кнопка активна перед запросом
        unfollowApi(userID)
            .then(data => {
                if (data.resultCode === 0) { //сервер подтвердил что подписка произошла
                    props.unfollowHandler(userID)
                }
                    props.buttonFalseDisabled(userID) //кнопка disabled после запроса
            }
            )}

    return (
        // возращает то же самое что и функциональная компонента, только пропсы превращаются в this.props
        <div>
            <ul className={s.pagesUsers}>
                {pages.map((m, i) => <li key={i} onClick={() => props.changeActualPage(m)}
                                         className={props.actualPage === m ? s.page : ''}>{m}</li>)}

            </ul>
            {
                props.contacts.map((m, i) => <div className={s.bodyContacts} key={m.id}>
                        <div className={s.icon}>
                            {/*мы хотим нажимать на иконку(img) и переходить на отдельный профиль юзера*/}

                            <NavLink to={'/profile/' + m.id}><img className={s.ava}
                                                                  src={m.photos.small !== null ? m.photos.small : userPfoto}/>
                            </NavLink> <br/>

                            {m.followed ?
                                <button disabled={props.followButtonActive.includes(m.id)} //если хоть одна id в массиве равна хоть одной айди пользователя-верни труе-дисэйбл
                                                  onClick={() => unfollowHandler(m.id)}>Unfolow</button>
                                //усли будет в followButtonActive тру-кнопка будет задизейблена
                                :<button disabled={props.followButtonActive.includes(m.id)}
                                        onClick={() => followHandler(m.id)}>Follow</button>}

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

