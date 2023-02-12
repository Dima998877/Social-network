import React from 'react'
import styles from './Users.module.css'
import usersPhoto from '../../assets/images/user-profile-picture.jpeg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return (
      <div>
         <div>
            {pages.map(p => {
               return <span
                  onClick={() => props.onPageChanged(p)}
                  className={props.currentPage === p ? styles.selected_page : ''}>{p}</span>
            })}
         </div>
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
                     ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { 
                           withCredentials: true,
                           headers:{ 'API-KEY': '0c3ac84b-f72f-426a-89b3-3c5bf477590c'}
                         })
                           .then((response) => {
                              if (response.data.resultCode === 0) {
                                 props.unfollow(u.id)}
                           })
                     }
                     }>Unfollow</button>
                     : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { 
                           withCredentials: true, 
                           headers:{'API-KEY': '0c3ac84b-f72f-426a-89b3-3c5bf477590c'} 
                        })
                           .then((response) => {
                              if (response.data.resultCode === 0) {
                                 props.follow(u.id)
                              }
                           })}
                        }>Follow</button>}
               </div>
               <div>
                  <div>{u.name}</div>
                  <div>{'u.country'}</div>
                  <div>{'u.city'}</div>
                  <div>{u.status}</div>
               </div>
            </div>))}
      </div>
   )
}
export default Users