import React, {JSXElementConstructor} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {ProfileUserType, setProfileUsers} from "../../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

type MapStatePropsType={
    profile:ProfileUserType | null;
}
type mapDispatchToPropsType={
    setProfileUsers:(user:ProfileUserType)=> void
}

export type ProfilePropsType = MapStatePropsType & mapDispatchToPropsType;



 class ProfileContainer extends React.Component<ProfilePropsType>{
     componentDidMount() {
         //@ts-ignore
        let userID = this.props.router.params.userID;
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/` + userID).then(response=>{
debugger
            this.props.setProfileUsers(response.data); //передаем через матчдиспатчпропс сразу в коннект
        })
    }
     // let profileId = this.props.router.params.profileId;
    render(){
        return (

           <Profile {...this.props} profile={this.props.profile}/>
        )
    }}

let mapStateToProps=(state:AppRootStateType):MapStatePropsType=>{
     debugger
return{
    profile:state.profilePage.profile
}
}

//оболочка для классовой компонеты
export const  withRouter=(Component:JSXElementConstructor<any>):JSXElementConstructor<any>=> {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps,{setProfileUsers})(withRouter(ProfileContainer));
