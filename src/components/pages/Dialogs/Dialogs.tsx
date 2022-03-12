import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, DialogsItemType} from "../../../redux/state";
import {addDialogPostAC, onChangeDialogAC} from "../../../redux/dialogReducer";


export type DialogsPropsType = {
    dialogsPage: DialogsItemType
    dispatch: (action: ActionType) => void

}


export const Dialogs = (props: DialogsPropsType) => {
    debugger

    const DialogElement = props.dialogsPage.dialogsItem.map(m => {
        return (
            <DialogItem id={m.id} name={m.name}/>
        )
    });
    const MessagesElement = props.dialogsPage.messagesItem.map(m => {
        return (

            <Message text={m.text} id={m.id}/>
        )
    })

    const onchangeDialog = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newDialog: string = e.currentTarget.value;
        props.dispatch(onChangeDialogAC(newDialog))
    }

    const clickAddDialog=()=>{
        props.dispatch(addDialogPostAC())
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>   {/*name*/}
                {DialogElement}
            </div>

            <div className={s.messages}>     {/*message*/}
                {MessagesElement}
                <textarea className={s.textarea} onChange={onchangeDialog} value={props.dialogsPage.dialogTextarea}/><br/>
                <button onClick={clickAddDialog}>Добавить сообщение</button>
            </div>


        </div>
    )
}