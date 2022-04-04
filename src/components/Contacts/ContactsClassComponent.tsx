import React from 'react';
import s from "./Contacts.module.css";
import userPfoto from "../../img/User-PNG-Icon.png";
import axios from "axios";
import {ContactsPropsType} from "./ContactsContainer";


type ContactsClassComponentPropsType = ContactsPropsType //типизация

export class ContactsClassComponent extends React.Component<ContactsClassComponentPropsType> {
    componentDidMount() { //вмонтирование происходит 1 раз а дальше апдейты
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.actualPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
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

    changeActualPage = (page: number) => {
        this.props.changeActualPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });

    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);//так мы узнаем количество страниц на нашем сайте
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            if(i<=20){ //условие чтобы сгенерировалось только 20 страниц
                pages.push(i);
            }

        }
        return ( // возращает то же самое что и функциональная компонента, только пропсы превращаются в this.props
            <div>
                <ul className={s.pagesUsers}>
                    {pages.map((m, i) => <li key={i} onClick={() => this.changeActualPage(m)}
                                             className={this.props.actualPage === m ? s.page : ''}>{m}</li>)}

                </ul>
                {
                    this.props.contacts.map(m => <div className={s.bodyContacts} key={m.id}>
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
