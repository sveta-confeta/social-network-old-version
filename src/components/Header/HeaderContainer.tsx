import React from "react";
import {Header} from "./Header";
import { headerAuthThunkCreator} from "../../redux/authReducer";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";


class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        this.props.headerAuthThunkCreator(); //Thunk гет запрос моей авторизации
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }

}

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    headerAuthThunkCreator: () => void
}
export type AuthPropsType = MapStatePropsType & MapDispatchPropsType //типизация для классовой компонеты
//через пропсы
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login


    }
}
export default connect(mapStateToProps, {
    headerAuthThunkCreator: headerAuthThunkCreator
})(HeaderContainer)
