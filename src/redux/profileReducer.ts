
import {v1} from "uuid";
import {ActionType,  ProfileType} from "./state";

let initialState={
    profilePosts: [
        {id: v1(), message: 'Hi, how are you?', count: 20},
        {id: v1(), message: 'What are you doing on Saturday?', count: 3},
        {id: v1(), message: 'By-by', count: 6},
    ],
        valueTextarea: '',
}


export const profileReducer = (state: ProfileType=initialState,action:ActionType) => { //приходит не весь стейт, а только часть данных нужных этому редьюсеру
    //теперь у нас под именем state-  _state.profilePage
    switch (action.type){
        case "ADD-POST" :{ //cодержимое  addPost()
            debugger
            let newPost = {id: v1(), message: state.valueTextarea, count: 0};//строка с содержимым текстареа добавляется в новое сообщение
            state.profilePosts.push(newPost);
            state.valueTextarea = ' ';// и зануляетсяa
            return state;
        }
        case "UPDATE-NEW-POST-TEXT": {  //cодержимое  updateNewPostText(newText: string)
            state.valueTextarea = action.newText;  //через newText приходит содержимое текстареа ,которое добавляется в пустую строку valueTextarea
            return state;

    }
        default: return state;

    }}


export type AddPostActionType= ReturnType<typeof addPostAC>

export type UpdateNewPostTextActionType= ReturnType<typeof onChangeHandlerAC>


//cдесь больше не должно быть в коде никаких функция перерисовки

export const addPostAC=()=>{
    return{
        type:"ADD-POST"
    } as const
}

export const onChangeHandlerAC=(newText:string)=>{   //передаем содержимое текстареа
    return{
        type:"UPDATE-NEW-POST-TEXT",
        newText:newText
    }as const
}
