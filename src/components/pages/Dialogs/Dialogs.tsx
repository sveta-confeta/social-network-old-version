import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import { DialogsItemType} from "../../../redux/state";
import { Navigate } from "react-router-dom";



export type DialogsPropsType = {
    dialogsPage: DialogsItemType
    onchangeDialog:(newDialog:string)=>void
    clickAddDialog:()=>void
    isAuth:boolean


}


export const Dialogs = (props: DialogsPropsType) => {

    const DialogElement = props.dialogsPage.dialogsItem.map((m,i) => {
        return (
            <DialogItem key={i} id={m.id} name={m.name}/>
        )
    });
    const MessagesElement = props.dialogsPage.messagesItem.map((m,i) => {
        return (

            <Message  key={i} text={m.text} id={m.id}/>
        )
    })

    const onchangeDialog = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newDialog: string = e.currentTarget.value;
       props.onchangeDialog(newDialog);
    }

    const clickAddDialog=()=>{
        props.clickAddDialog();
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