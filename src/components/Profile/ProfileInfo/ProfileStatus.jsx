import React from 'react';
import s from './ProfileInfo.module.css';


class  ProfileStatus extends React.Component {
    state = {
       editMode: false,
       status: this.props.status
    }
    activatedMode = () => {
       this.setState ({
         editMode : true
       })
          
    }
    deactivatedMode = () => {
       
      this.setState ({
        editMode : false
      })
         
   }
   onStatusChange = (e) => {
      this.setState({
          status: e.currentTarget.value
      });
  }

  componentDidUpdate(prevProps, prevState) {

      if (prevProps.status !== this.props.status) {
          this.setState({
              status: this.props.status
          });
      }

      console.log("componentDidUpdate")
  }

render () {
    return (
        <div>
           {!this.state.editMode &&
               <div>
                  <span onDoubleClick={this.activatedMode} >{this.props.status || '-----'}</span>
               </div>
          }         
          {this.state.editMode &&
               <div>
                  <input onChange={this.onStatusChange} autoFocus={true} onBlur = {this.deactivatedMode} value= {this.props.status}></input>
               </div>
          }
        </div>
    )
}
}

export default ProfileStatus;