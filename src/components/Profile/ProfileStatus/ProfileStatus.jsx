import React from 'react'
import style from './ProfileStatus.module.css'
class ProfileStatus extends React.Component {
   localState = {
      editMode: false
   }
   activateEditMode = () => {
      this.setState({
         editMode: true
      })
      this.localState.editMode = true
   }
   deActivateEditMode = () => {
      this.setState({
         editMode: false
      })
      this.localState.editMode = false
   }
   render() {
      return (
         <div className={style.profile_status}>
            {!this.localState.editMode &&
               <div>
                  <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
               </div>
            }
            {this.localState.editMode &&
               <div>
                  <input autoFocus onBlur={this.deActivateEditMode} type="text" defaultValue={this.props.status} />
               </div>
            }
         </div>
      )
   }
}

export default ProfileStatus