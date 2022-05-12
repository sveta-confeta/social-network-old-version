import React, {JSXElementConstructor} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {profileThunkCreator, ProfileUserType, setProfileUsers} from "../../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

type MapStatePropsType = {
    profile: ProfileUserType | null;
}
type mapDispatchToPropsType = {
    setProfileUsers: (user: ProfileUserType) => void
    profileThunkCreator:(userID:string)=>void
}

export type ProfilePropsType = MapStatePropsType & mapDispatchToPropsType;


class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        //@ts-ignore
         let userID:string = this.props.router.params.userID;
         this.props.profileThunkCreator(userID);
    }

    // let profileId = this.props.router.params.profileId;
    render() {
        return (

            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
   // debugger
    return {
        profile: state.profilePage.profile
    }
}

//оболочка для классовой компонеты
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

export default connect(mapStateToProps, {setProfileUsers,
    profileThunkCreator})(withRouter(ProfileContainer));
