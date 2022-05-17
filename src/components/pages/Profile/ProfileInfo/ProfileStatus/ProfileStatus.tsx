import React from 'react';

type ProfileStatusType={
    status:any
}


 export class ProfileStatus extends React.Component<ProfileStatusType>{    //делаем классовой компонетой
    state ={
        editMode:false
    }
   activeEditMode(){
        this.setState({
            editMode:true
       })}

     deactiveEditMode(){
         this.setState({
             editMode:false
         })}
render(){
        return (
            <div>{ this.state.editMode
                ?  <input  onBlur={this.deactiveEditMode.bind(this)} autoFocus value={this.props.status}/>
                :  <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status}</span>

            }
            </div>
        );
    }

};
