import {changeFetchingAC} from "./contactsReducer";
import {Dispatch} from "redux";
import {headerApiAuth} from "../api/api";


export type AuthType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isFetching: boolean,
    isAuth:boolean
}

// let auth:authType= {
//    "data":{"id":22634,"login":"SvetlanaShunkova","email":"_svet_@tut.by"},
//    "messages":[],
// }

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false,  //если id,email,login пришли
    isFetching: false,

}


export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => { //приходит не весь стейт, а только часть данных нужных этому редьюсеру
    //теперь у нас под именем state-  _state.profilePage
    switch (action.type) {
        case  "SET-USER-DATA": {
           return  {...state,...action.data,isAuth:true}
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


export const setUserDataAC = (id: number, email: string, login: string) =>
    ({type: "SET-USER-DATA", data: {id, email, login,}} as const);

export const headerAuthThunkCreator=()=>(dispatch:Dispatch)=>{
    headerApiAuth()
        .then(data=>{
            if (data.resultCode===0){
                let {id,email,login} = data.data //деструктуризация
                dispatch(setUserDataAC(id,email,login))
            }
        })
}


