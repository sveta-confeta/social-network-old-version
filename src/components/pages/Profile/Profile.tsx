import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfileType} from "../../../redux/state";

export type ProfilePropsType = {
    profilePage: ProfileType
    dispatch:(action:ActionType)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts profilePosts={props.profilePage.profilePosts} valueTextarea={props.profilePage.valueTextarea}
                     dispatch={props.dispatch}/>
        </div>
    )
}


