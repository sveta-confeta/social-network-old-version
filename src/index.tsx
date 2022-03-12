import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";

// let rerenderEntireTree=(state:AppRootStateType)=>{ //нам эту функцию нужно в стейт отдать как колбэк ,чтоб не было циклической зависимости
ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
    </BrowserRouter>,
    document.getElementById('root')
);
// }
// rerenderEntireTree(store.getState())//вызывыаем эту функцию и потом в параметрах передаем как колбэк
// store.subscribe(()=>{
//     let state=store.getState();
//     rerenderEntireTree(state);
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
