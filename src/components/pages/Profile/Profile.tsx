import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../../redux/profileReducer";


type ProfilePropsType={
    profile:ProfileUserType | null,
    status:string,
    updateStatusProfileThunkCreator:(status:string)=>void


}



export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusProfileThunkCreator={props.updateStatusProfileThunkCreator}/>
            <MyPostsContainer/>
        </div>
    )
}


