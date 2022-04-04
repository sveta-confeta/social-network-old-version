import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    actualPageAC,
    ContactsType,
    followAC,
    setUsersAC,
    totalUsersCountAC,
    unFollowAC
} from "../../redux/contactsReducer";
import {Dispatch} from "redux";
import {ContactsClassComponent} from "./ContactsClassComponent";

type MapStatePropsType = {
    contacts: Array<ContactsType>
    pageSize:number,
    totalUsersCount:number,
    actualPage:number
}
type MapDispatchPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string)=>void
    setUsers: (users: Array<ContactsType>)=>void
    changeActualPage:(actualPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}
export type ContactsPropsType= MapStatePropsType & MapDispatchPropsType //чтоб передать коротко в презентационную компоненту
    //через пропсы
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        contacts: state.contactsPage.contact,//нам нужен не весь стейт а его часть
        //и теперь в props Contacts будет сидеть сontacts
        pageSize:state.contactsPage.pageSize,
        totalUsersCount:state.contactsPage.totalUsersCount,
        actualPage:state.contactsPage.actualPage,

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
        changeActualPage:(actualPage:number)=>{
            dispatch(actualPageAC(actualPage))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(totalUsersCountAC(totalCount))
        },

    }
}

export const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsClassComponent)
