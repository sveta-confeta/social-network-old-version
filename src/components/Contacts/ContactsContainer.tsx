import React from 'react';
import {connect} from "react-redux";
import {Contacts} from "./Contacts";
import {AppRootStateType} from "../../redux/redux-store";
import {ContactsType, followAC, setUsersAC, unFollowAC} from "../../redux/contactsReducer";

const mapStateToProps=(state:AppRootStateType)=>{
    return{
        contacts:state.contactsPage.contact //нам нужен не весь стейт а его часть
        //и теперь в props Contacts будет сидеть сontacts
    }
}

const mapDispatchToProps=(dispatch:any)=>{
    return{
        follow:(userID:string)=>{
            dispatch(followAC(userID))
        },
        unfollow:(userID:string)=>{
            dispatch(unFollowAC(userID))
        },
        setUsers:(users:Array<ContactsType>)=>{
            dispatch(setUsersAC(users))
        },

    }
}

export const ContactsContainer = connect(mapStateToProps,mapDispatchToProps)(Contacts)
