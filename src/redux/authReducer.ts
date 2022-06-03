import {changeFetchingAC} from "./contactsReducer";
import {Dispatch} from "redux";
import {DataLoginType, headerApiAuth, loginApi} from "../api/api";
import {errorApiAC} from "./appReducer";


export type AuthType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth:boolean, //это flag
    // authLogin:boolean,
}

// let auth:authType= {
//    "data":{"id":22634,"login":"SvetlanaShunkova","email":"_svet_@tut.by"},
//    "messages":[],
// }

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false,  //если id,email,login пришли если мы залогинены то true
    // authLogin:false, //инициализационный логин который проверяет залогинен ли пользователь на сайте

}


export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => { //приходит не весь стейт, а только часть данных нужных этому редьюсеру
    //теперь у нас под именем state-  _state.profilePage
    switch (action.type) {
        case  "SET-USER-DATA": {
           return  {...state,...action.data,isAuth:true}//дата это [],который мы спред оператором добавляем
        }
        case 'AUTH-LOGIN':{
            return {...state, isAuth:action.value}
        }
        default:
            return state;

    }
}

type ActionType = setUserDataACType | changeFetchingACType | postAuthLoginACType |ErrorMessageType;

type setUserDataACType = ReturnType<typeof setUserDataAC>
type changeFetchingACType=ReturnType<typeof changeFetchingAC>
type postAuthLoginACType=ReturnType<typeof postAuthLoginAC>
type ErrorMessageType=ReturnType<typeof errorApiAC>


export const setUserDataAC = (id: number, email: string, login: string) =>
    ({type: "SET-USER-DATA", data: {id, email, login,}} as const);

export const postAuthLoginAC = (value:boolean) =>
    ({type: 'AUTH-LOGIN', value} as const);


//Thunk
export const headerAuthThunkCreator=()=>(dispatch:Dispatch)=>{ //GET запрс за auth/me
    headerApiAuth()
        .then(data=>{
            if (data.resultCode===0){
                let {id,email,login} = data.data //деструктуризация
                dispatch(setUserDataAC(id,email,login));

            } else{
                debugger
                dispatch(changeFetchingAC(false))
                dispatch(errorApiAC(data.messages[0]))

            }
        })
}

export const  AuthLoginThunkCreator=(data:DataLoginType)=>(dispatch:Dispatch)=>{ //Post запрос логина
    dispatch(changeFetchingAC(true))
    loginApi.postLogin(data)
        .then((res) =>{
            if (res.data.resultCode===0){
                dispatch(changeFetchingAC(false))
                dispatch(postAuthLoginAC(true))

             } else{
                dispatch(changeFetchingAC(false))
                dispatch(errorApiAC(res.data.messages[0]))

            }
        })
};
export const LoginOutThunkCreator=()=>(dispatch:Dispatch)=>{
    dispatch(changeFetchingAC(true))
    loginApi.deleteLogin()
        .then((res) =>{
            if (res.data.resultCode===0){
                dispatch(changeFetchingAC(false))
                dispatch(postAuthLoginAC(false))

            } else{
                dispatch(changeFetchingAC(false))
                dispatch(errorApiAC(res.data.messages[0]))

            }

        })
}


