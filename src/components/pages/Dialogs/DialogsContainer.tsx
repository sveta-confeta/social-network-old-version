import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, DialogsItemType} from "../../../redux/state";
import {addDialogPostAC, onChangeDialogAC} from "../../../redux/dialogReducer";
import {Dialogs} from "./Dialogs";


export type DialogsPropsType = {
    dialogsPage: DialogsItemType
    dispatch: (action: ActionType) => void

}


export const DialogsContainer = (props: DialogsPropsType) => {

    const onchangeDialog = (newDialog:string) => {
        props.dispatch(onChangeDialogAC(newDialog))
    }

    const clickAddDialog=()=>{
        props.dispatch(addDialogPostAC())
    }


    return (
      <Dialogs dialogsPage={props.dialogsPage} clickAddDialog={clickAddDialog} onchangeDialog={onchangeDialog}/>
    )
}