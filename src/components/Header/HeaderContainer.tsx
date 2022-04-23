import React from "react";
import {Header} from "./Header";
import {AuthType, setUserDataAC} from "../../redux/authReducer";
import axios from "axios";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";


 class HeaderContainer extends React.Component<AuthPropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.1/auth/me`,{withCredentials:true}).then(response => {  //withCredentials:true-одобрение на куку
           // debugger
            if (response.data.resultCode===0){
                let {id,email,login} = response.data.data //деструктуризация
               this.props.dataAuth(id,email,login)//dataAuth-this MapDispatchProps, но dataAuth ждет 3 аргумета которые нужно деструктурировать
            }

        })
    }
    render()
    {

        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }

}
type MapStatePropsType={
     isAuth:boolean
    login:string | null
}
type MapDispatchPropsType={
    dataAuth:(id: number, email: string, login: string)=>void
}
export type AuthPropsType = MapStatePropsType & MapDispatchPropsType //типизация для классовой компонеты
//через пропсы
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isAuth:state.auth.isAuth,
        login:state.auth.login


    }}
        export default connect(mapStateToProps,{dataAuth:setUserDataAC})(HeaderContainer)
