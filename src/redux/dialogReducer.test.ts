import {DialogsItemType} from "./state";
import {v1} from "uuid";
import {addDialogPostAC, dialogReducer, onChangeDialogAC} from "./dialogReducer";


test('"UPDATE-NEW-DIALOG-TEXT"',()=>{
    const startState:DialogsItemType= {
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
    }

    let newDialog='YoU everybody'

    const endState=dialogReducer (startState,onChangeDialogAC(newDialog));
    expect(endState.dialogTextarea).toBe(newDialog)
})

test('NEW-DIALOG-POST',()=>{
    const startState:DialogsItemType= {
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
    }


    const endState=dialogReducer (startState,addDialogPostAC());
    expect(endState.messagesItem.length).toBe(4)
})
