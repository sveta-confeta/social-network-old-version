import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ActionType, ProfileType} from "../../../redux/state";

export type ProfilePropsType = {


}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer

            />
        </div>
    )
}


