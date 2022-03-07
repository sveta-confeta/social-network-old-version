import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/pages/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/pages/Dialogs/Dialogs";
import {News} from "./components/pages/News/News";
import {Music} from "./components/pages/Music/Music";
import {Helping} from "./components/pages/Helping/Helping";
import {StoreType} from "./redux/state";

type AppPropsType = {
    // state: StateType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    store:StoreType
}

function App(props: AppPropsType) {
    const state=props.store.getState();

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar navbarPage={state.navbarPage}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/' element={<Profile profilePage={state.profilePage}
                        //биндом связываем метод с родителем-store -ом
                                                      dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs dispatch={props.store.dispatch.bind(props.store)}
                        dialogsPage={state.dialogsPage}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/helping' element={<Helping/>}/>
                    <Route path='/helping' element={<Helping/>}/>
                    {/*<Route path='*' element={<NotFoundPage/>}/> -если не найдены страницы можно оформить и отобразить эту компоненту*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
