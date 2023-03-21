import React from 'react'
import styles from './Users.module.css'
import usersPhoto from '../../assets/images/user-profile-picture.jpeg'
import { NavLink } from 'react-router-dom'
import Paginator from '../Common/Paginatator/Paginator'

const Users = (props) => {

   return (
      <div>
         <Paginator
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onPageChanged={props.onPageChanged}
            currentPage={props.currentPage}
         />
         {props.users.map(u => (
            <div key={u.id}>
               <div>
                  <NavLink to={'/profile/' + u.id}>
                     <img src={u.photos.small != null ? u.photos.small : usersPhoto}
                        alt='user_photo' className={styles.user_photo} />
                  </NavLink>
               </div>
               <div>
                  {u.followed
                     ? <button
                        disabled={props.followInProgress.some(id => id === u.id)}
                        onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                     : <button
                        disabled={props.followInProgress.some(id => id === u.id)}
                        onClick={() => { props.follow(u.id) }}>Follow</button>}
               </div>
               <div>
                  <div>{u.name}</div>
                  <div>{'u.country'}</div>
                  <div>{'u.city'}</div>
                  <div>{u.status}</div>
               </div>
            </div>
         ))}
      </div>
   )
}
export default Users