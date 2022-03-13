
import {v1} from "uuid";
import {  ProfileType} from "./state";

let initialState={
    profilePosts: [
        {id: v1(), message: 'Hi, how are you?', count: 20},
        {id: v1(), message: 'What are you doing on Saturday?', count: 3},
        {id: v1(), message: 'By-by', count: 6},
    ],
        valueTextarea: '',
}


export const profileReducer = (state: ProfileType=initialState,action:ActionType):ProfileType => { //приходит не весь стейт, а только часть данных нужных этому редьюсеру
    //теперь у нас под именем state-  _state.profilePage
    switch (action.type){
        case "ADD-POST" :{ //cодержимое  addPost()
            let newPost = {id: v1(), message: state.valueTextarea, count: 0};//строка с содержимым текстареа добавляется в новое сообщение
            let newState={...state,profilePosts:[...state.profilePosts,newPost]};
            newState.valueTextarea = ' ';// и зануляетсяa
            return newState;
        }
        case "UPDATE-NEW-POST-TEXT": {  //cодержимое  updateNewPostText(newText: string)
            return {...state,valueTextarea:state.valueTextarea = action.newText};  //через newText приходит содержимое текстареа ,которое добавляется в пустую строку valueTextarea


    }
        default: return state;

    }}

type ActionType=AddPostActionType| UpdateNewPostTextActionType;

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
