

let initialState: ContactsStateType = {
     contact: [ //как будто изначально ничего нет, и мы отрисуем контактов в условии что сдесь изначально ничего нет
    //     {
    //         id: v1(),
    //         fotoIcon:'https://sun9-1.userapi.com/c855724/v855724535/15854/dHNLGjoiM_0.jpg',
    //         followed: true,
    //         fullName: 'Dmitry',
    //         status: 'I am boss',
    //         location: {city: 'Tbilisi', coutntry: 'Gorgia'}
    //     },
    //     {
    //         id: v1(),
    //         fotoIcon:'https://sun9-1.userapi.com/c855724/v855724535/15854/dHNLGjoiM_0.jpg',
    //         followed: true,
    //         fullName: 'Sveta',
    //         status: 'I am junior',
    //         location: {city: 'Minsk', coutntry: 'Belarus'}
    //     },
    //     {
    //         id: v1(),
    //         fotoIcon:'https://sun9-1.userapi.com/c855724/v855724535/15854/dHNLGjoiM_0.jpg',
    //         followed: true,
    //         fullName: 'Olga',
    //         status: 'I am fine',
    //         location: {city: 'Varshava', coutntry: 'Polska'}
    //     },
    //     {
    //         id: v1(),
    //         fotoIcon:'https://sun9-1.userapi.com/c855724/v855724535/15854/dHNLGjoiM_0.jpg',
    //         followed: false,
    //         fullName: 'Natasha',
    //         status: 'Shit happens',
    //         location: {city: 'Moskow', coutntry: 'Rasha'}
    //     },
     ],
    pageSize:5, //количество выводимых юзеров на страницу
    totalUsersCount:0, //начальное значение всех юзеров -должно приходить с сервера
    actualPage:2,//активная выбранная страница-со старта первая
    isFetching:false,//крутилка .начальное значение выключено
    followButtonActive:false,//кнопка в состоянии disabled что исключает повторный запрос на сервер пока не придет ответ
}
export type ContactsType = {
    id: string
    photos: {
        small: undefined|string,
        large: undefined|string,
    }
    followed: boolean
    name: string
    status: string
    location: { city: string, coutntry: string }
}

export type ContactsStateType = {
    contact: Array<ContactsType>,
    pageSize:number,
    totalUsersCount:number,
    actualPage:number,
    isFetching:boolean,
    followButtonActive:boolean,
}
type followACType = ReturnType<typeof followAC>;
type unFollowACType = ReturnType<typeof unFollowAC>;
type setUsersACType= ReturnType<typeof setUsersAC>
type actualPageACType=ReturnType<typeof actualPageAC>
type totalUsersCountACType=ReturnType<typeof totalUsersCountAC>
type changeFetchingACType=ReturnType<typeof changeFetchingAC>
type followButtonActiveACType=ReturnType<typeof followButtonActiveAC>

type ActionType = followACType | unFollowACType  | setUsersACType | actualPageACType| totalUsersCountACType|changeFetchingACType | followButtonActiveACType;
export const ContactsReducer = (state: ContactsStateType = initialState, action: ActionType): ContactsStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state,contact:state.contact.map(m=> m.id===action.userID ? {...m,followed:true} : m)}
        }
        case 'UN-FOLLOW':{
            return {...state,contact:state.contact.map(m=> m.id===action.userID  ?{...m,followed:false} : m)}
        }
        case 'SET-USERS':{
            return {...state,contact: action.users}
        }
        case 'ACTUAL-PAGE':{
            return {...state,actualPage:action.actualPage}
        }
        case 'TOTAL-USERS-COUNT':{
            return {...state,totalUsersCount:action.totalUsersCount}
        }
        case 'CHANGE-FETCHING':{
            return {...state,isFetching:action.value}
        }
        case 'FOLLOW-BUTTON-ACTIVE':{
            return {...state,followButtonActive:action.value}
        }
        default:
            return  state;
    }
}

export const totalUsersCountAC = (totalUsersCount:number) => {
    return {
        type: 'TOTAL-USERS-COUNT',
        totalUsersCount,
    } as const
}

export const actualPageAC = (actualPage:number) => {
    return {
        type: 'ACTUAL-PAGE',
        actualPage,
    } as const
}

export const followAC = (userID: string) => {
    return {
        type: 'FOLLOW',
        userID,
    } as const
}

export const unFollowAC = (userID: string) => {
    return {
        type: 'UN-FOLLOW',
        userID,
    } as const
}
// // c cервера будем брать юзеров и помещать в обьект=стейт:
export const setUsersAC = (users:Array<ContactsType>) => {
    return {
        type: 'SET-USERS',
        users,
    } as const
}

export const changeFetchingAC = (value:boolean) => {
    return {
        type: 'CHANGE-FETCHING',
       value,
    } as const
}

export const followButtonActiveAC = (value:boolean) => {
    return {
        type: 'FOLLOW-BUTTON-ACTIVE',
        value,
    } as const
}

