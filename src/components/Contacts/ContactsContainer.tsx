import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    actualPageAC, buttonFalseDisabledAC, buttonTrueDisabledAC, changeActualPageThunkCreator, changeFetchingAC,
    ContactsType,
    followAC, getUsersThunkCreator,
    setUsersAC,
    totalUsersCountAC,
    unFollowAC
} from "../../redux/contactsReducer";

import {ContactsPresentation} from "./ContactsPresentation";
import {Preloader} from "../Util/Preloader";



type MapStatePropsType = {
    contacts: Array<ContactsType>
    pageSize: number,
    totalUsersCount: number,
    actualPage: number,
    isFetching: boolean,
    followButtonActive: string[];

}
type MapDispatchPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<ContactsType>) => void
    changeActualPage: (actualPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    changeFetching: (value: boolean) => void
    buttonTrueDisabled: (userID: string) => void,
    buttonFalseDisabled: (userID: string) => void,
    getUsersThunkCreator: (actualPage: number, pageSize: number) => void
    changeActualPageThunkCreator:(page:number, pageSize:number)=>void
}
export type ContactsPropsType = MapStatePropsType & MapDispatchPropsType //типизация для классовой компонеты

//классовая компонета с подключением к серверу
export class ContactsClassComponent extends React.Component<ContactsPropsType> {
    componentDidMount() { //вмонтирование происходит 1 раз а дальше апдейты
        this.props.getUsersThunkCreator(this.props.actualPage, this.props.pageSize); //get запрос за пользователями

    }

    changeActualPage = (page: number) => {
        this.props.changeActualPageThunkCreator(page, this.props.pageSize)
    }

    unfollowHandler = (userID: string) => {
        this.props.unfollow(userID)
    }

    followHandler = (userID: string) => {
        this.props.follow(userID)
    }

    //
    // constructor(props:ContactsPropsType) {  //конструируем единожды обьект
    //     super(props);
    //
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //         this.props.setUsers(response.data.items);
    //     });
    //
    // }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <ContactsPresentation changeActualPage={this.changeActualPage}
                                  unfollowHandler={this.unfollowHandler}
                                  followHandler={this.followHandler}
                                  totalUsersCount={this.props.totalUsersCount}
                                  pageSize={this.props.pageSize}
                                  actualPage={this.props.actualPage}
                                  contacts={this.props.contacts}
                                  followButtonActive={this.props.followButtonActive}
                                  buttonTrueDisabled={this.props.buttonTrueDisabled}
                                  buttonFalseDisabled={this.props.buttonFalseDisabled}

            />

        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        contacts: state.contactsPage.contact,//нам нужен не весь стейт а его часть
        //и теперь в props Contacts будет сидеть сontacts
        pageSize: state.contactsPage.pageSize,
        totalUsersCount: state.contactsPage.totalUsersCount,
        actualPage: state.contactsPage.actualPage,
        isFetching: state.contactsPage.isFetching,
        followButtonActive: state.contactsPage.followButtonActive,

    }
}
//import dispatch из редакса
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userID: string) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID: string) => {
//             dispatch(unFollowAC(userID))
//         },
//         setUsers: (users: Array<ContactsType>) => {
//             dispatch(setUsersAC(users))
//         },
//         changeActualPage: (actualPage: number) => {
//             dispatch(actualPageAC(actualPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(totalUsersCountAC(totalCount))
//         },
//         changeFetching: (value: boolean) => {
//             dispatch(changeFetchingAC(value))
//         },
//
//     }
// }

//рефактор mapDispatchToProps:
export const ContactsContainer = connect(mapStateToProps, {
    follow: followAC,
    unfollow: unFollowAC,
    setUsers: setUsersAC,
    changeActualPage: actualPageAC,
    setTotalUsersCount: totalUsersCountAC,
    changeFetching: changeFetchingAC,
    buttonTrueDisabled: buttonTrueDisabledAC,
    buttonFalseDisabled: buttonFalseDisabledAC,
    getUsersThunkCreator: getUsersThunkCreator, //thunk
    changeActualPageThunkCreator:changeActualPageThunkCreator //thunk
})(ContactsClassComponent)
