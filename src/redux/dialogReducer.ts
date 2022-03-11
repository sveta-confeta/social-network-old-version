import {v1} from "uuid";
import {ActionType, DialogsItemType} from "./state";

export const dialogReducer = (state: DialogsItemType,action:ActionType) => {
   if (action.type ==='NEW-DIALOG-POST') {
        let newPost = {text:state.dialogTextarea, id: v1()};
        state.messagesItem.push(newPost);
        state.dialogTextarea = "";

    }else if (action.type ==="UPDATE-NEW-DIALOG-TEXT") {
        state.dialogTextarea = action.newText;

    }
   return state
};