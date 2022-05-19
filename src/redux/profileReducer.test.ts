import {v1} from "uuid";
import {addPostAC, onChangeHandlerAC, profileReducer, ProfileType} from "./profileReducer";

test('add post',()=>{
    const startState:ProfileType= {
        profilePosts: [
            {id: v1(), message: 'Hi, how are you?', count: 20},
            {id: v1(), message: 'What are you doing on Saturday?', count: 3},
            {id: v1(), message: 'By-by', count: 6},
        ],
            valueTextarea: '',
        profile: null,
        status:'hello',
    }

   const endState=profileReducer(startState,addPostAC());
    expect(endState.profilePosts.length).toBe(4)
})

test('"UPDATE-NEW-POST-TEXT"',()=>{
    const startState:ProfileType= {
        profilePosts: [
            {id: v1(), message: 'Hi, how are you?', count: 20},
            {id: v1(), message: 'What are you doing on Saturday?', count: 3},
            {id: v1(), message: 'By-by', count: 6},
        ],
        valueTextarea: '',
        profile: null,
        status:'hello',
    }
    let newText:string='Hallo,How are you';

    const endState=profileReducer(startState,onChangeHandlerAC(newText));
    expect(endState.valueTextarea).toBe(newText)
})
