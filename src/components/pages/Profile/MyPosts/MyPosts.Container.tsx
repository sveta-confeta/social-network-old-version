
import React from "react";
import {ActionType, PostType} from "../../../../redux/state";
import {addPostAC, onChangeHandlerAC} from "../../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";

 type MyPostsPropsType={
     profilePosts:Array<PostType>
     dispatch:(action:ActionType)=>void
     valueTextarea:string
 }





export const MyPostsContainer = (props:MyPostsPropsType) => {


     let clickAddPost = () =>{
           props.dispatch(addPostAC()); //при клике на кнопку активируем эту функцию которая в стейте добавляет содержимое
         //из текстареа в новое сообщение

       }


     let onChangeHandler=(newText:string)=>{
         props.dispatch(onChangeHandlerAC(newText))  //отправляем в стейт содержимое текстареа
     }

    return (
      <MyPosts profilePosts={props.profilePosts} onChangeHandler={onChangeHandler} valueTextarea={props.valueTextarea} clickAddPost={clickAddPost}/> //задача контейнерной компоненты отрисовать презентационную и удовлетвориить данными
    )
}

