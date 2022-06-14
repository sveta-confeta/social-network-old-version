import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {FriendsDataType} from "../../redux/state";

type NavbarPropsType={
    navbarPage:FriendsDataType
}

export const Navbar = (props:NavbarPropsType) => {

    return (
        <div className={s.navbar}>
            <nav className={s.nav}>
                <div className={s.item}><NavLink to ='/profile/22634' className={({isActive}) => isActive ? s.active : s.item}>Profile</NavLink></div>
                <div className={s.item}><NavLink to='/dialogs' className={({isActive}) => isActive ? s.active : s.item}  >Messages</NavLink></div>
                <div className={s.item}><NavLink to='/news' className={({isActive}) => isActive ? s.active : s.item}>News</NavLink></div>
                <div className={s.item}><NavLink to='/music' className={({isActive})=> isActive ? s.active : s.item} >Music</NavLink></div>
                <div className={s.item}><NavLink to='/helping' className={({isActive})=> isActive ? s.active : s.item}>Helping</NavLink></div>
                <div className={`${s.item} ${s.contacts}`}><NavLink to='/contacts' className={({isActive})=> isActive ? s.active : s.item}>Contacts</NavLink></div>
            </nav>
            
            <Friends friendData={props.navbarPage.friendsData}/>

        </div>
    )
}
//app///////
// useEffect(() => {
//     initializeTC()
// }, [])
// if (!initialized){
//     return <Loader/>
// }
// return (
//     <BrowserRouter>
//         <ThemeProvider theme={theme}>
//             <div className="wrapper">
//                 <Routes>
//                     <Route path='/' element={<Header/>}>
//                         <Route index element={<Navigate to={'/15849'}/>}/>
//                         <Route path="dialogs" element={<Suspense fallback={<Loader/>}><MessagesContainer/></Suspense>}/>
//                         <Route path=":userId" element={<Suspense fallback={<Loader/>}><MainContainer/></Suspense>}/>
//                         <Route path="*" element={<Error404/>}/>
//                         <Route path="users" element={<Suspense fallback={<Loader/>}><UsersContainer/></Suspense>}/>
//                         <Route path="login" element={<Login/>}/>
//                     </Route>
//                 </Routes>
//             </div>

//////navbar//////
// <ul className={finalClassName}>
//     <li><NavLink to='/'
//                  className={({isActive}) => `${s.link} ${isActive ? s.link_active : ''}`}>Home</NavLink>
//     </li>
//     <li><NavLink to='/dialogs'
//                  className={({isActive}) => `${s.link} ${isActive ? s.link_active : ''}`}>Messages</NavLink>
//     </li>
//     <li><NavLink to='/users'
//                  className={({isActive}) => `${s.link} ${isActive ? s.link_active : ''}`}>Friends</NavLink>
//     </li>
//     <li><NavLink to='/setting'
//                  className={({isActive}) => `${s.link} ${isActive ? s.link_active : ''}`}>Settings</NavLink>
//     </li>
// </ul>