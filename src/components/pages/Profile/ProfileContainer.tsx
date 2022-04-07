import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";



 class ProfileContainer extends React.Component{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0//profile/2').then(response=>{
            this.props.setPrifileUsers(response.data);
        })
    }

    render(){
        return (

           <Profile/>
        )
    }}

let mapStateToProps=(state)=>{

}
let mapDispatchToProps=(dispatch)=>{

}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer);
