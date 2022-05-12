import {v1} from "uuid";
import {PostType} from "./state";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";
import {changeFetchingAC, changeFetchingACType} from "./contactsReducer";

export type ProfileType = {
    profilePosts: Array<PostType>
    valueTextarea: string
    profile: ProfileUserType | null,

}

export type ProfileUserType={
    "aboutMe": string
    "contacts": {
        "facebook": string
        "website": null,
        "vk":string
        "twitter":string
        "instagram":string
        "youtube": null,
        "github": string
        "mainLink": null
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription":string
    "fullName": string
    "userId":number
    "photos": {
        "small": string,
        "large": string
    }
}

// let profile:profileType= {
//     "aboutMe": "я круто чувак 1001%",
//     "contacts": {
//     "facebook": "facebook.com",
//         "website": null,
//         "vk": "vk.com/dimych",
//         "twitter": "https://twitter.com/@sdf",
//         "instagram": "instagra.com/sds",
//         "youtube": null,
//         "github": "github.com",
//         "mainLink": null
// },
//     "lookingForAJob": true,
//     "lookingForAJobDescription": "не ищу, а дурачусь",
//     "fullName": "samurai dimych",
//     "userId": 2,
//     "photos": {
//     "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
//         "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
// }
// }

let initialState = {
    profilePosts: [
        {id: v1(), message: 'Hi, how are you?', count: 20},
        {id: v1(), message: 'What are you doing on Saturday?', count: 3},
        {id: v1(), message: 'By-by', count: 6},
    ],
    valueTextarea: '',
    profile: null,
}


export const profileReducer = (state: ProfileType = initialState, action: ActionType): ProfileType => { //приходит не весь стейт, а только часть данных нужных этому редьюсеру
    //теперь у нас под именем state-  _state.profilePage
    switch (action.type) {
        case "ADD-POST" : { //cодержимое  addPost()
            let newPost = {id: v1(), message: state.valueTextarea, count: 0};//строка с содержимым текстареа добавляется в новое сообщение
            let newState = {...state, profilePosts: [...state.profilePosts, newPost]};
            newState.valueTextarea = ' ';// и зануляетсяa
            return newState;
        }
        case "UPDATE-NEW-POST-TEXT": {  //cодержимое  updateNewPostText(newText: string)
            return {...state, valueTextarea: state.valueTextarea = action.newText};  //через newText приходит содержимое текстареа ,которое добавляется в пустую строку valueTextarea


        }
        case  "SET-PROFILE-USERS": {
            return {...state,profile:action.user}

        }
        default:
            return state;

    }
}

type ActionType = AddPostActionType | UpdateNewPostTextActionType | SetPrifileUsersACType | changeFetchingACType;

export type AddPostActionType = ReturnType<typeof addPostAC>

export type UpdateNewPostTextActionType = ReturnType<typeof onChangeHandlerAC>
export type SetPrifileUsersACType=ReturnType<typeof setProfileUsers>


//cдесь больше не должно быть в коде никаких функция перерисовки

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const onChangeHandlerAC = (newText: string) => {   //передаем содержимое текстареа
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
export const setProfileUsers = (user:ProfileUserType) => {
    return {
        type: "SET-PROFILE-USERS",
        user,
    } as const
}

export const profileThunkCreator=(userID:string)=>(dispatch:Dispatch)=>{
    dispatch(changeFetchingAC(true));
    profileApi(userID)
    .then(data=>{
        dispatch(changeFetchingAC(false));
        dispatch(setProfileUsers(data));

    })
}