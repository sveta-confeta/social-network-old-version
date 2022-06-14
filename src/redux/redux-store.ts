import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {friendsReducer} from "./friendsReducer";
import {ContactsReducer} from "./contactsReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {appReducer} from "./appReducer";
import {useDispatch} from "react-redux";

let rootReducer=combineReducers({//сюда поместим все редьюсеры
    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    navbarPage:friendsReducer,
    contactsPage:ContactsReducer,
    auth: authReducer,
    app:appReducer,
});

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch=ThunkDispatch<AppRootStateType, any, AnyAction>;
export const useAppDispatch=()=>useDispatch<AppDispatch>();

export let store=createStore(rootReducer,applyMiddleware(thunkMiddleware));

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;

//store.getState()  пишем в консоли

