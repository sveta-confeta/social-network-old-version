import {v1} from "uuid";

let initialState: ContactsStateType = {
     contact: [
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
     ]
}
export type ContactsType = {

    id: string
    fotoIcon:string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, coutntry: string }
}

export type ContactsStateType = {
    contact: Array<ContactsType>
}
type followACType = ReturnType<typeof followAC>;
type unFollowACType = ReturnType<typeof unFollowAC>;
type setUsersACType= ReturnType<typeof setUsersAC>

type ActionType = followACType | unFollowACType  | setUsersACType;
export const ContactsReducer = (state: ContactsStateType = initialState, action: ActionType): ContactsStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state,contact:state.contact.map(m=> m.id===action.userID ? {...m,followed:true} : m)}
        }
        case 'UN-FOLLOW':{
            return {...state,contact:state.contact.map(m=> m.id===action.userID  ?{...m,followed:false} : m)}
        }
        case 'SET-USERS':{
            return {...state,contact: [...state.contact, ...action.users]}
        }
        default:
            return  state;
    }
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