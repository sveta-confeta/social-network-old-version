import React, {ChangeEvent} from 'react';
import s from './../ProfileInfo.module.css'

type ProfileStatusType={
    status:any,
    updateStatusProfileThunkCreator:(status:string)=>void
}


 export class ProfileStatus extends React.Component<ProfileStatusType>{    //делаем классовой компонетой
    state ={
        editMode:false,
        status:this.props.status, //заводим локальный стейт и в статусе теперь сидит то что приходит из пропсов
    }
   activeEditMode=()=>{
        this.setState({
            editMode:true
       })}

     deactiveEditMode=()=>{ //если стрелочная функция то мы не bind this
         this.setState({
             editMode:false,
         })
         this.props.updateStatusProfileThunkCreator(this.state.status); //передаем статус из локального стейта на сервер
    }

    chengeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            status:e.currentTarget.value
        })

     }
render(){
        return (
            <>{ this.state.editMode
                ?  <input  onChange={this.chengeHandler} onBlur={this.deactiveEditMode} autoFocus value={this.state.status}/>
                :  <span className={s.inputsSize} onDoubleClick={this.activeEditMode}>{this.props.status}</span>

            }
            </>
        );
    }

};
