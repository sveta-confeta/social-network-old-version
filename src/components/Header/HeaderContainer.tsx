import React from "react";
import {Header} from "./Header";
import { LoginOutThunkCreator} from "../../redux/authReducer";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";


class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        debugger

        this.props.LoginOutThunkCreator();   //удаление логинизации
    }


    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}
                    LoginOutThunkCreator={ this.props.LoginOutThunkCreator}
                   />
        )
    }

}

type MapStatePropsType = {
    isAuth: boolean
    login: string | null

}
type MapDispatchPropsType = {

    LoginOutThunkCreator:()=>void
}
export type AuthPropsType = MapStatePropsType & MapDispatchPropsType //типизация для классовой компонеты
//через пропсы
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,



    }
}
export default connect(mapStateToProps, {
    LoginOutThunkCreator:LoginOutThunkCreator
})(HeaderContainer)