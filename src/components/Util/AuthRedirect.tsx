import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function AuthRedirect<T>(Component: ComponentType<T>) { //с дженериками работает только обычная function
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) {
            return <Navigate to={`/login`}/>
        }
        return <Component {...restProps as T}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent;
};

