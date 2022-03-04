import {v1} from "uuid";


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
}

export type ProfileType = {
    profilePosts: Array<PostType>
    valueTextarea: string

}
export type StateType = {
    profilePage: ProfileType
    dialogsPage: DialogsItemType
    navbarPage: FriendsDataType
}

export type ActionType=AddPostActionType|UpdateNewPostTextActionType

export type AddPostActionType={
    type:"ADD-POST"
}

export type UpdateNewPostTextActionType={
    type:"UPDATE-NEW-POST-TEXT"
    newText:string
}


export type StoreType = {
    _state: StateType
    subscribe: (callback: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => StateType
    dispatch:(action:ActionType)=>void
}

// export let addPost=(value:string)=>{
//
//    let newPost= {id: v1(), message: value, count:0};
//     {...state,profilePosts:[...state.profilePage.profilePosts,newPost]}
//     rerenderEntireTree();
//
// }


export let store: StoreType = {
    _state: {
        profilePage: {
            profilePosts: [
                {id: v1(), message: 'Hi, how are you?', count: 20},
                {id: v1(), message: 'What are you doing on Saturday?', count: 3},
                {id: v1(), message: 'By-by', count: 6},
            ],
            valueTextarea: '',
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
        return this._state; //метод который возращает приватный _state
    },
    _rerenderEntireTree() {
    },

    subscribe(callback: () => void) {
        this._rerenderEntireTree = callback;
    },

    //передает action -обьект который описывает какое действие совершить.имеет обязательное св-во type:
    dispatch(action) {
        if (action.type === "ADD-POST") { //cодержимое  addPost()
            let newPost = {id: v1(), message: this._state.profilePage.valueTextarea, count: 0};//строка с содержимым текстареа добавляется в новое сообщение
            this._state.profilePage.profilePosts.push(newPost);
            this._state.profilePage.valueTextarea = ' ';// и зануляетсяa
            this._rerenderEntireTree();
        } else if(action.type === "UPDATE-NEW-POST-TEXT"){  //cодержимое  updateNewPostText(newText: string)
            this._state.profilePage.valueTextarea = action.newText;  //через newText приходит содержимое текстареа ,которое добавляется в пустую строку valueTextarea
            this._rerenderEntireTree();
        }
    }

}
