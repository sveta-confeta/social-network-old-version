import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import { DialogsItemType} from "../../../redux/state";





export type DialogsPropsType = {
   dialogsPage:DialogsItemType

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



    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>   {/*name*/}
                {DialogElement}
            </div>

            <div className={s.messages}>     {/*message*/}
                {MessagesElement}
            </div>


        </div>
    )
}