



export type AuthType = {
  error:string | null,
}


let initialState = {
  error:"error" || null,

}


export const appReducer = (state: AuthType = initialState, action: ActionType): AuthType => { //приходит не весь стейт, а только часть данных нужных этому редьюсеру
    //теперь у нас под именем state-  _state.profilePage
    switch (action.type) {

        case 'ERROR-API':{
            return {...state, error:action.value}
        }
        default:
            return state;

    }
}

type ActionType =ReturnType<typeof errorApiAC> ;



export const errorApiAC = (value:string|null) =>
    ({type: 'ERROR-API', value} as const);


//Thunk





