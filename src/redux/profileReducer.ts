
import {v1} from "uuid";
import {ActionType, ProfileType} from "./state";

export const profileReducer = (state: ProfileType,action:ActionType) => { //приходит не весь стейт, а только часть данных нужных этому редьюсеру
    //теперь у нас под именем state-  _state.profilePage
    switch (action.type){
        case "ADD-POST" :{ //cодержимое  addPost()
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


//cдесь больше не должно быть в коде никаких функция перерисовки
