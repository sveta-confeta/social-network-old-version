import React from "react";
import {addDialogPostAC, onChangeDialogAC} from "../../../redux/dialogReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {AuthRedirect} from "../../Util/AuthRedirect";

// export const DialogsContainer = (props: DialogsPropsType) => {
//
//     const onchangeDialog = (newDialog:string) => {
//         props.dispatch(onChangeDialogAC(newDialog))
//     }
//
//     const clickAddDialog=()=>{
//         props.dispatch(addDialogPostAC())
//     }
//
//
//     return (
//       <Dialogs dialogsPage={props.dialogsPage} clickAddDialog={clickAddDialog} onchangeDialog={onchangeDialog}/>
//     )
// }

let mapStateToProps=(state:AppRootStateType)=>{    //в первом обьекте  сидят данные из стейта
return {
    dialogsPage:state.dialogsPage,
     isAuth: state.auth.isAuth
}};

let mapDispatchToProps=(dispatch:any)=>{   //колбэки для презентационной компоненты
return {
    clickAddDialog:()=>{
        dispatch(addDialogPostAC());
    },
    onchangeDialog:(newDialog:string)=>{
        dispatch(onChangeDialogAC(newDialog));
    },
}}

export const DialogsContainer=AuthRedirect(connect(mapStateToProps,mapDispatchToProps)(Dialogs) )//как бы мы dialog законектили к stor-у при помощи react-redux