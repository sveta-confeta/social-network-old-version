import React from 'react';
import s from "./Contacts.module.css";
import userPfoto from "../../img/User-PNG-Icon.png";
import axios from "axios";
import {ContactsPropsType} from "./ContactsContainer";


type ContactsClassComponentPropsType = ContactsPropsType //типизация

export class ContactsClassComponent extends React.Component<ContactsClassComponentPropsType> {
    componentDidMount() { //вмонтирование происходит 1 раз а дальше апдейты
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                     this.props.setUsers(response.data.items);
                 });
    }

    //
    // constructor(props:ContactsPropsType) {  //конструируем единожды обьект
    //     super(props);
    //
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //         this.props.setUsers(response.data.items);
    //     });
    //
    // }


    unfollowHandler = (userID: string) => {
        this.props.unfollow(userID)
    }

    followHandler = (userID: string) => {
        this.props.follow(userID)
    }

    render() {
        return ( // возращает то же самое что и функциональная компонента, только пропсы превращаются в this.props
            <div>
                {
                    this.props.contacts.contact.map(m => <div className={s.bodyContacts} key={m.id}>
                            <div className={s.icon}>
                                <img className={s.ava} src={m.photos.small !== null ? m.photos.small : userPfoto}/> <br/>
                                {m.followed ? <button onClick={() => this.unfollowHandler(m.id)}>Unfolow</button> :
                                    <button onClick={() => this.followHandler(m.id)}>Follow</button>}

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
        )
    }
}
