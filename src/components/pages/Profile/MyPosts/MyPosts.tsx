
import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionType, addPostAC, onChangeHandlerAC, PostType} from "../../../../redux/state";

 type MyPostsPropsType={
     profilePosts:Array<PostType>
     dispatch:(action:ActionType)=>void
     valueTextarea:string
 }





export const MyPosts = (props:MyPostsPropsType) => {


     let clickAddPost = () =>{
           props.dispatch(addPostAC()); //при клике на кнопку активируем эту функцию которая в стейте добавляет содержимое
         //из текстареа в новое сообщение

       }


     let onChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
         let newText=e.currentTarget.value;
         props.dispatch(onChangeHandlerAC(newText))  //отправляем в стейт содержимое текстареа
     }

    return (
        <div>
            My posts:
            <div>
                <textarea onChange={onChangeHandler} value={props.valueTextarea}/>
                {/*с рефами: кнопка вызывает функцию*/}
                <button onClick={clickAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {props.profilePosts.map(m=>{
                    return(
                        <div key={m.id} className={s.item}>
                            <Post id={m.id} count={m.count} message={m.message}/>
                            {/*//компонента с 1 постом*/}
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

