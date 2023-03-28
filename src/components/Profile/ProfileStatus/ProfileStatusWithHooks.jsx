import React, { useState, useEffect } from 'react'
import style from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {
   const [editMode, setEditMode] = useState(false)

   const [status, setStatus] = useState(props.status);

   useEffect( () => { setStatus(props.status) }, [props.status] )

   const activateEditMode = () => { setEditMode(true) }

   const deActivateEditMode = () => {
      setEditMode(false)
      props.updateProfileStatus(status)
   }

   const onStatusChange = (e) => { setStatus(e.currentTarget.value) }

   return (
      <div className={style.profile_status}>
         {!editMode &&
            <div>
               <span onDoubleClick={activateEditMode}>
                  {props.status || 'no status'}
               </span>
            </div>
         }
         {editMode &&
            <div>
               <input onChange={onStatusChange} autoFocus name='status'
                  onBlur={deActivateEditMode} value={status} type="text" />
            </div>
         }
      </div>
   )
}

export default ProfileStatusWithHooks