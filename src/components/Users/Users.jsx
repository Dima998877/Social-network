import React from "react"
import styles from './Users.module.css'
const Users = (props) => {
   if (props.users.length === 0) {
      props.setUsers([
         { id: '1', name: 'Ann', status: 'Designer. Looking for a job', follow: true, country: 'Belarus', city: 'Minsk',
         image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Rapper_B.o.B_2013.jpg'},
         { id: '2', name: 'Pete', status: 'Hi everyone!', follow: false, country: 'Poland', City: 'Krakow',
         image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Rapper_B.o.B_2013.jpg'},
         { id: '3', name: 'Nick', status: 'Do nothing', follow: true, country: 'Germany', City: 'Berlin', 
         image:'https://upload.wikimedia.org/wikipedia/commons/4/48/Rapper_B.o.B_2013.jpg'},
         { id: '4', name: 'Marie', status: 'Piu-Piu', follow: false, country: 'USA', City: 'New York', 
         image:'https://upload.wikimedia.org/wikipedia/commons/4/48/Rapper_B.o.B_2013.jpg'},
      ])
   }
   return (



      <div>
         {
            props.users.map(u => <div key={u.id}>
               <div><img src={u.image} alt='user_photo' className={styles.user_photo} /></div>
               <div>
                  {u.follow ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                     : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
               </div>
               <div>
                  <div>{u.name}</div>
                  <div>{u.country}</div>
                  <div>{u.city}</div>
                  <div>{u.status}</div>
               </div>
            </div>)
         }
      </div>
   )

}
export default Users