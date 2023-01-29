import React from "react"
import styles from './Users.module.css'
import Axios from'axios'
import usersPhoto from '../../assets/images/user-profile-picture.jpeg'

class Users extends React.Component {
   componentDidMount() {
      Axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then((response) => {
            this.props.setUsers(response.data.items)
         })
   }
   return () {
      <div>
         {
            this.props.users.map(u => <div key={u.id}>
               <div><img src={u.photos.small != null ? u.photos.small : usersPhoto } alt='user_photo' className={styles.user_photo} /></div>
               <div>
                  {u.follow ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                     : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
               </div>
               <div>
                  <div>{u.name}</div>
                  <div>{'u.country'}</div>
                  <div>{'u.city'}</div>
                  <div>{u.status}</div>
               </div>
            </div>)
         }
      </div>
   }

}
export default Users