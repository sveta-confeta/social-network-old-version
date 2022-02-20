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
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function App(props: AppPropsType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar navbarPage={props.state.navbarPage}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/' element={<Profile profilePage={props.state.profilePage}
                                                      updateNewPostText={props.updateNewPostText}
                                                      addPost={props.addPost}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
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
