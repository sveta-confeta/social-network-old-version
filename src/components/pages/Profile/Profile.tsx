import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfileType} from "../../../redux/state";

export type ProfilePropsType = {
    profilePage: ProfileType
    addPost: () => void
    updateNewPostText:(newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts profilePosts={props.profilePage.profilePosts} valueTextarea={props.profilePage.valueTextarea}
                     updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>
        </div>
    )
}


