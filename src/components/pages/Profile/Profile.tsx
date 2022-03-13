import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPosts.Container";
import {ActionType, ProfileType} from "../../../redux/state";

export type ProfilePropsType = {
    profilePage: ProfileType
    dispatch:(action:ActionType)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer
                profilePosts={props.profilePage.profilePosts} valueTextarea={props.profilePage.valueTextarea}
                     dispatch={props.dispatch}
            />
        </div>
    )
}


