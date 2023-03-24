import React from 'react'
import styles from './Users.module.css'
import usersPhoto from '../../assets/images/user-profile-picture.jpeg'
import { NavLink } from 'react-router-dom'

const User = ({ user, followInProgress, unfollow, follow }) => {
   return (
      <div>
         <div>
            <NavLink to={'/profile/' + user.id}>
               <img src={user.photos.small != null ? user.photos.small : usersPhoto}
                  alt='user_photo' className={styles.user_photo} />
            </NavLink>
         </div>
         <div>
            {user.followed
               ? <button
                  disabled={followInProgress.some(id => id === user.id)}
                  onClick={() => { unfollow(user.id) }}>Unfollow</button>
               : <button
                  disabled={followInProgress.some(id => id === user.id)}
                  onClick={() => { follow(user.id) }}>Follow</button>}
         </div>
         <div>
            <div>{user.name}</div>
            <div>{'u.country'}</div>
            <div>{'u.city'}</div>
            <div>{user.status}</div>
         </div>
      </div>
   )
}
export default User