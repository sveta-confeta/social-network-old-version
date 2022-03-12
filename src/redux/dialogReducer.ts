import {v1} from "uuid";
import {ActionType, DialogsItemType} from "./state";

let initialState= {
    dialogsItem: [
        {name: 'Dimych', id: 1},
        {name: 'Agafon', id: 2},
        {name: 'Mitrofan', id: 3},
        {name: 'Fedot', id: 4},
    ],
    messagesItem: [
        {text: 'Hi!!!', id: v1()},
        {text: 'Have you done motorcycle repairs?', id: v1()},
        {text: 'We are flying to Odessa tomorrow!', id: v1()},

    ],
    dialogTextarea: '',

};

export const dialogReducer = (state: DialogsItemType=initialState,action:ActionType) => {
   if (action.type ==='NEW-DIALOG-POST') {
        let newPost = {text:state.dialogTextarea, id: v1()};
        state.messagesItem.push(newPost);
        state.dialogTextarea = "";

    }else if (action.type ==="UPDATE-NEW-DIALOG-TEXT") {
        state.dialogTextarea = action.newText;

    }
   return state
};


export type OnChangeDialogACType=ReturnType<typeof onChangeDialogAC>

export type AddDialogPostACType=ReturnType<typeof addDialogPostAC>

export const onChangeDialogAC=(newDialog:string)=>{   //передаем содержимое текстареа
    return{
        type:"UPDATE-NEW-DIALOG-TEXT",
        newText:newDialog
    }as const
}
export const addDialogPostAC=()=>{
    return{
        type:'NEW-DIALOG-POST'
    } as const
}