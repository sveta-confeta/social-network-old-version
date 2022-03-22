import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/pages/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/pages/News/News";
import {Music} from "./components/pages/Music/Music";
import {Helping} from "./components/pages/Helping/Helping";
import {store} from "./redux/redux-store";
import {DialogsContainer} from "./components/pages/Dialogs/DialogsContainer";
import {ContactsContainer} from "./components/Contacts/ContactsContainer";



function App() {
    const state=store.getState();
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar navbarPage={state.navbarPage}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/' element={<Profile/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer
                        />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/helping' element={<Helping/>}/>
                    <Route path='/helping' element={<Helping/>}/>
                    <Route path='/contacts' element={<ContactsContainer/>}/>
                    {/*<Route path='*' element={<NotFoundPage/>}/> -если не найдены страницы можно оформить и отобразить эту компоненту*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
