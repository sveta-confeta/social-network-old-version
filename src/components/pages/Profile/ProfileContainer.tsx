import React, {JSXElementConstructor} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {
    getStatusProfileThunkCreator,
    profileThunkCreator,
    ProfileUserType,
    setProfileUsers, updateStatusProfileThunkCreator
} from "../../../redux/profileReducer";
import { useLocation, useNavigate, useParams} from "react-router-dom";
import {AuthRedirect} from "../../Util/AuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileUserType | null,
    status:string,

}
type mapDispatchToPropsType = {
    setProfileUsers: (user: ProfileUserType) => void
    profileThunkCreator:(userID:string)=>void
    getStatusProfileThunkCreator:(userID:string)=>void
    updateStatusProfileThunkCreator:(status:string)=>void
}

export type ProfilePropsType = MapStatePropsType & mapDispatchToPropsType;


class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        //@ts-ignore
         let userID:string = this.props.router.params.userID;
         // if(!userID){
         //     userID='22634'
         // }
         this.props.profileThunkCreator(userID); //запрос на добавление профиля юзера
        this.props.getStatusProfileThunkCreator(userID); //запрос на добавление статуса юзера
    }

    // let profileId = this.props.router.params.profileId;

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}  //профайл который мы заполняем в редьюсере из апи
                     status={this.props.status}
                     updateStatusProfileThunkCreator={this.props.updateStatusProfileThunkCreator}/> //изменение своего статуса
        )
    }
}


let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
         status: state.profilePage.status,

    }
}

//оболочка для классовой компонеты и контейнерной
export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

// export default AuthRedirect(connect(mapStateToProps, {setProfileUsers,
//     profileThunkCreator})(withRouter(ProfileContainer)));//переписали на compose
export default compose<React.ComponentType>(connect(mapStateToProps, {setProfileUsers,
    profileThunkCreator,updateStatusProfileThunkCreator,getStatusProfileThunkCreator}),
    withRouter,
    AuthRedirect)
(ProfileContainer)