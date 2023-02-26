import React from 'react'
import style from './ProfileStatus.module.css'
class ProfileStatus extends React.Component {
   state = {
      editMode: false
   }
   activateEditMode = () => {
      this.setState({
         editMode: true
      })
      this.state.editMode = true
   }
   deActivateEditMode = () => {
      this.setState({
         editMode: false
      })
      this.state.editMode = false
   }
   render() {
      return (
         <div className={style.profile_status}>
            {!this.state.editMode &&
               <div>
                  <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
               </div>
            }
            {this.state.editMode &&
               <div>
                  <input autoFocus onBlur={this.deActivateEditMode} type="text" defaultValue={this.props.status} />
               </div>
            }
         </div>
      )
   }
}

export default ProfileStatus