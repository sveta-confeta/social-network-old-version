import {ActionType, FriendsDataType} from "./state";

let initialState={
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
}

export const friendsReducer = (state:FriendsDataType=initialState,action:ActionType) => {
    return state;

};