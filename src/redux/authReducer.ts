import {changeFetchingAC} from "./contactsReducer";


export type AuthType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isFetching: boolean,
}

// let auth:authType= {
//    "data":{"id":22634,"login":"SvetlanaShunkova","email":"_svet_@tut.by"},
//    "messages":[],
// }

let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,

}


export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => { //приходит не весь стейт, а только часть данных нужных этому редьюсеру
    //теперь у нас под именем state-  _state.profilePage
    switch (action.type) {
        case  "SET-USER-DATA": {
           return  {...state,...action.data}
        }
        case 'CHANGE-FETCHING':{
            return {...state,isFetching:action.value}
        }

        default:
            return state;

    }
}

type ActionType = setUserDataACType | changeFetchingACType;
type setUserDataACType = ReturnType<typeof setUserDataAC>
type changeFetchingACType=ReturnType<typeof changeFetchingAC>


export const setUserDataAC = (userID: number, email: string, login: string) => {
    return {
        type: "SET-USER-DATA",
        data: {
            userID,
            email,
            login,
        },


    } as const
}



