import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {friendsReducer} from "./friendsReducer";
import {ContactsReducer} from "./contactsReducer";

let rootReducer=combineReducers({//сюда поместим все редьюсеры
    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    navbarPage:friendsReducer,
    contactsPage:ContactsReducer,
});

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

export let store=createStore(rootReducer);

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;



