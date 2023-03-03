import React from 'react'
import style from './ProfileStatus.module.css'
class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      status: this.props.status
   }
   activateEditMode = () => {
      this.setState({
         editMode: true
      })
      // this.state.editMode = true
   }
   deActivateEditMode = () => {
      this.setState({
         editMode: false
      })
      // this.state.editMode = false
      this.props.updateProfileStatus(this.state.status)
   }
   onProfileStatusChange = (event) => {
      this.setState({
         status: event.currentTarget.value
      })
   }
   render() {
      return (
         <div className={style.profile_status}>
            {!this.state.editMode &&
               <div>
                  <span onDoubleClick={this.activateEditMode}>{this.props.status || 'no status'}</span>
               </div>
            }
            {this.state.editMode &&
               <div>
                  <input onChange={this.onProfileStatusChange} autoFocus onBlur={this.deActivateEditMode} type="text" value={this.state.status} />
               </div>
            }
         </div>
      )
   }
}

export default ProfileStatus