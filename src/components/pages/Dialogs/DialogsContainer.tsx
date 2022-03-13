import React from "react";
import {ActionType, DialogsItemType, StateType} from "../../../redux/state";
import {addDialogPostAC, onChangeDialogAC} from "../../../redux/dialogReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


export type DialogsPropsType = {
    dialogsPage: DialogsItemType
    dispatch: (action: ActionType) => void

}


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

let stateToProps=(state:StateType)=>{    //в первом обьекте  сидят данные из стейта
return {
    dialogsPage:state.dialogsPage
}};

let dispatchToProps=(dispatch:any)=>{   //колбэки для презентационной компоненты
return {
    clickAddDialog:()=>{
        dispatch(addDialogPostAC());
    },
    onchangeDialog:(newDialog:string)=>{
        dispatch(onChangeDialogAC(newDialog));
    },
}}

export const DialogsContainer=connect(stateToProps,dispatchToProps)(Dialogs) //как бы мы dialog законектили к stor-у при помощи react-redux