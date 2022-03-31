import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ContactsStateType, ContactsType, followAC, setUsersAC, unFollowAC} from "../../redux/contactsReducer";
import {Dispatch} from "redux";
import {ContactsClassComponent} from "./ContactsClassComponent";

type MapStatePropsType = {
    contacts: ContactsStateType
}
type MapDispatchPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string)=>void
    setUsers: (users: Array<ContactsType>)=>void
}
export type ContactsPropsType= MapStatePropsType & MapDispatchPropsType //чтоб передать коротко в презентационную компоненту
    //через пропсы
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        contacts: state.contactsPage//нам нужен не весь стейт а его часть
        //и теперь в props Contacts будет сидеть сontacts
    }
}
//import dispatch из редакса
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType=>{
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<ContactsType>) => {
            dispatch(setUsersAC(users))
        },

    }
}

export const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsClassComponent)
