import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {friendsReducer} from "./friendsReducer";

let reducers=combineReducers({//сюда поместим все редьюсеры
    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    navbarPage:friendsReducer
});

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof reducers>

export let store=createStore(reducers);

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;



