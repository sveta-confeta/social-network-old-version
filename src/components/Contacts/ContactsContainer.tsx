import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    actualPageAC, changeFetchingAC,
    ContactsType,
    followAC,
    setUsersAC,
    totalUsersCountAC,
    unFollowAC
} from "../../redux/contactsReducer";
import {Dispatch} from "redux";
import axios from "axios";
import {ContactsPresentation} from "./ContactsPresentation";
import {Preloader} from "../Util/Preloader";

type MapStatePropsType = {
    contacts: Array<ContactsType>
    pageSize: number,
    totalUsersCount: number,
    actualPage: number,
    isFetching: boolean,
}
type MapDispatchPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<ContactsType>) => void
    changeActualPage: (actualPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    changeFetching:(value:boolean)=>void
}
export type ContactsPropsType = MapStatePropsType & MapDispatchPropsType //чтоб передать коротко в презентационную компоненту
//через пропсы


type ContactsClassComponentPropsType = ContactsPropsType //типизация для классовой компонеты

//классовая компонета с подключением к серверу
export class ContactsClassComponent extends React.Component<ContactsClassComponentPropsType> {
    componentDidMount() { //вмонтирование происходит 1 раз а дальше апдейты
        this.props.changeFetching(true);//true-когда пошел запорос
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.actualPage}&count=${this.props.pageSize}`).then(response => {
            this.props.changeFetching(false);//false--когда пошел ответ
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    changeActualPage = (page: number) => {
        this.props.changeFetching(true);//true-когда пошел запорос
        this.props.changeActualPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.changeFetching(false);//false--когда пошел ответ
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

        return <>
            {this.props.isFetching ? <Preloader/>: null}
            <ContactsPresentation changeActualPage={this.changeActualPage}
                                  unfollowHandler={this.unfollowHandler}
                                  followHandler={this.followHandler}
                                  totalUsersCount={this.props.totalUsersCount}
                                  pageSize={this.props.pageSize}
                                  actualPage={this.props.actualPage}
                                  contacts={this.props.contacts}

            />

        </>
    }
}


const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        contacts: state.contactsPage.contact,//нам нужен не весь стейт а его часть
        //и теперь в props Contacts будет сидеть сontacts
        pageSize: state.contactsPage.pageSize,
        totalUsersCount: state.contactsPage.totalUsersCount,
        actualPage: state.contactsPage.actualPage,
        isFetching: state.contactsPage.isFetching,

    }
}
//import dispatch из редакса
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userID: string) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID: string) => {
//             dispatch(unFollowAC(userID))
//         },
//         setUsers: (users: Array<ContactsType>) => {
//             dispatch(setUsersAC(users))
//         },
//         changeActualPage: (actualPage: number) => {
//             dispatch(actualPageAC(actualPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(totalUsersCountAC(totalCount))
//         },
//         changeFetching: (value: boolean) => {
//             dispatch(changeFetchingAC(value))
//         },
//
//     }
// }

//рефактор mapDispatchToProps:
export const ContactsContainer = connect(mapStateToProps, {
    follow:followAC,
    unfollow: unFollowAC,
    setUsers: setUsersAC,
    changeActualPage: actualPageAC,
    setTotalUsersCount: totalUsersCountAC,
    changeFetching: changeFetchingAC,
    })(ContactsClassComponent)
