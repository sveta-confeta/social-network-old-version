import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileUserType} from "../../../../redux/profileReducer";
import logo from './../../../../img/User-PNG-Icon.png'
import {Preloader} from "../../../Util/Preloader";

type ProfileInfoPropsType={
    profile:ProfileUserType | null;
}


const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.profile){
        return <Preloader/>  //если нет профайла то крутилка
    }//потом разметка
    return (
        <div>
            <img className={s.main_img} src="https://pbs.twimg.com/profile_banners/2862249501/1415359067/1500x500"
                 width="950" height="250"/>
            <div className={s.description_block}>
           <img className={s.logo} src={props.profile.photos.small!==null ? props.profile.photos.small : logo}/>

            </div>


        </div>
    )
}

export default ProfileInfo;