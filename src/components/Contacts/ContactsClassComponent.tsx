import React from 'react';
import axios from "axios";
import {ContactsPropsType} from "./ContactsContainer";
import {ContactsPresentation} from "./ContactsPresentation";


type ContactsClassComponentPropsType = ContactsPropsType //типизация

export class ContactsClassComponent extends React.Component<ContactsClassComponentPropsType> {
    componentDidMount() { //вмонтирование происходит 1 раз а дальше апдейты
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.actualPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    changeActualPage = (page: number) => {
        this.props.changeActualPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });

    }
    unfollowHandler = (userID: string) => {
        this.props.unfollow(userID)
    }

    followHandler = (userID: string) => {
        this.props.follow(userID)
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


    render() {

        return <ContactsPresentation changeActualPage={this.changeActualPage}
                                     unfollowHandler={this.unfollowHandler}
                                     followHandler={this.followHandler}
                                     totalUsersCount={this.props.totalUsersCount}
                                     pageSize={this.props.pageSize}
                                     actualPage={this.props.actualPage}
                                     contacts={this.props.contacts}

        />


    }
}
