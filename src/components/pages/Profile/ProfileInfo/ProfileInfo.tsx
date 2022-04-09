import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileUserType} from "../../../../redux/profileReducer";
import logo from './../../../../img/User-PNG-Icon.png'
import {Preloader} from "../../../Util/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileUserType | null;
}


const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>  //если нет профайла то крутилка
    }//потом разметка
    // if (props.profile)
    return (
        <div>
            <img className={s.main_img} src={"https://pbs.twimg.com/profile_banners/2862249501/1415359067/1500x500" }
                 width="950" height="250"/>
            <div className={s.description_block}>
                <div className={s.person}>
                    <img className={s.logo}
                         src={props.profile.photos.small !== null ? props.profile.photos.small : logo}/>
                    <div className={s.name}>{props.profile.fullName}</div>
                </div>
                <div className={s.me}><span>About me:</span> {props.profile.aboutMe}</div>
                <div className={s.contacts}>Contacts:</div>
                <ul className={s.contactsList}>
                    <li ><span>facebook:</span><a>{props.profile.contacts.facebook}</a></li>
                    <li><span>website:</span><a>{props.profile.contacts.website}</a></li>
                    <li><span>vk:</span><a>{props.profile.contacts.vk}</a></li>
                    <li><span>githab:</span><a>{props.profile.contacts.github}</a></li>
                    <li><span>twitter:</span><a>{props.profile.contacts.twitter}</a></li>
                    <li><span>instagram:</span><a>{props.profile.contacts.instagram}</a></li>
                    <li><span>youtube:</span><a>{props.profile.contacts.youtube}</a></li>
                    <li><span>mainLink:</span><a>{props.profile.contacts.mainLink}</a></li>
                </ul>

            </div>
            <div className={s.work} >Status:{props.profile.lookingForAJobDescription}</div>


        </div>
    )
}

export default ProfileInfo;