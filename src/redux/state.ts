import {v1} from "uuid";
import {AddPostActionType, profileReducer, ProfileType, UpdateNewPostTextActionType} from "./profileReducer";
import {AddDialogPostACType, dialogReducer, OnChangeDialogACType,} from "./dialogReducer";
import {friendsReducer} from "./friendsReducer";


export type PostType = {
    id: string
    message: string
    count: number
}

export type DialogItemType = {
    name: string
    id: number
}
export type MessageItemType = {
    text: string
    id: string
}
export type FriendItemType = {
    id: number
    name_friend: string
    img_friend: string

}
export type FriendsDataType = {
    friendsData: Array<FriendItemType>
}

export type DialogsItemType = {
    dialogsItem: Array<DialogItemType>
    messagesItem: Array<MessageItemType>
    dialogTextarea: string
}


export type StateType = {
    profilePage: ProfileType
    dialogsPage: DialogsItemType
    navbarPage: FriendsDataType
}


export type ActionType = AddPostActionType | UpdateNewPostTextActionType | OnChangeDialogACType | AddDialogPostACType

export type StoreType = {
    _state: StateType
    subscribe: (callback: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}


export let store: StoreType = {
    _state: {
        profilePage: {
            profilePosts: [
                {id: v1(), message: 'Hi, how are you?', count: 20},
                {id: v1(), message: 'What are you doing on Saturday?', count: 3},
                {id: v1(), message: 'By-by', count: 6},
            ],
            valueTextarea: '',
            profile: null,
            status:'Hello',
        },
        dialogsPage: {
            dialogsItem: [
                {name: 'Dimych', id: 1},
                {name: 'Agafon', id: 2},
                {name: 'Mitrofan', id: 3},
                {name: 'Fedot', id: 4},
            ],
            messagesItem: [
                {text: 'Hi!!!', id: v1()},
                {text: 'Have you done motorcycle repairs?', id: v1()},
                {text: 'We are flying to Odessa tomorrow!', id: v1()},

            ],
            dialogTextarea: '',

        },
        navbarPage: {
            friendsData: [

                {
                    id: 1,
                    name_friend: 'Diogen Motogonych',
                    img_friend: 'https://i.pinimg.com/236x/b3/01/e6/b301e6ea3e8b0632c158010d38d21a60.jpg'

                },
                {
                    id: 2,
                    name_friend: 'Eldar Speed',
                    img_friend: 'https://i.pinimg.com/236x/74/48/ba/7448ba2658e5bbfc4ed29a1460da922f.jpg'
                },
                {
                    id: 3,
                    name_friend: 'Masha NeVasha',
                    img_friend: 'https://i.pinimg.com/236x/01/fb/3a/01fb3a6472c506046457517b2f2d9a4a--cafe-racer-girl-biker-chick.jpg'
                },

            ],
        },

    },

    getState() {
        return this._state; //?????????? ?????????????? ?????????????????? ?????????????????? _state
    },
    _rerenderEntireTree() {
    },

    subscribe(callback: () => void) {
        this._rerenderEntireTree = callback;
    },

    //???????????????? action -???????????? ?????????????? ?????????????????? ?????????? ???????????????? ??????????????????.?????????? ???????????????????????? ????-???? type:
    dispatch(action) {
        //@ts-ignore
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        //@ts-ignore
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.navbarPage = friendsReducer(this._state.navbarPage, action);

        this._rerenderEntireTree();

    }

}





