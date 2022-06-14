import React, {Component} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/pages/News/News";
import {Music} from "./components/pages/Music/Music";
import {Helping} from "./components/pages/Helping/Helping";
import {DialogsContainer} from "./components/pages/Dialogs/DialogsContainer";
import {ContactsContainer} from "./components/Contacts/ContactsContainer";
import ProfileContainer from "./components/pages/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";
import {connect} from "react-redux";
import {AppRootStateType, store} from "./redux/redux-store";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Preloader} from "./components/Util/Preloader";
import {headerAuthThunkCreator} from "./redux/authReducer";

const mapStateToProps=(state:AppRootStateType)=>{
    return {
        initialized:state.app.initialized
    }
}

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    headerAuthThunkCreator: () => void
}
// type MapStatePropsType={
//     initialized:boolean
// }
type AppPropsType= DispatchPropsType & MapStatePropsType
   //////////////


class App extends Component<AppPropsType> {
     state=store.getState();
     componentDidMount() {
         this.props.headerAuthThunkCreator();
     }

    render(){
         if(!this.props.initialized){
             return<Preloader/>
         }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar navbarPage={this.state.navbarPage}/>
                <div className="app-wrapper-content">
                    <Routes>

                        {/*<Route path='/profile' element={<ProfileContainer/>}/>*/}
                        <Route path='/profile/:userID' element={<ProfileContainer/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer
                        />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/helping' element={<Helping/>}/>
                        <Route path='/contacts' element={<ContactsContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                        {/*<Route path='*' element={<NotFoundPage/>}/> -если не найдены страницы можно оформить и отобразить эту компоненту*/}
                    </Routes>
                </div>
            </div>
        );
    }}



export default connect(mapStateToProps,{headerAuthThunkCreator})(App)
