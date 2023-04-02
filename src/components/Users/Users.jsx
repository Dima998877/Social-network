import React from 'react'
import Paginator from '../Common/Paginatator/Paginator'
import User from '../User/User'

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
         <User 
         key={u.id} 
         user={u} 
         followInProgress={props.followInProgress} 
         unfollow={props.unfollow} 
         follow={props.follow} />
         ))}
      </div>
   )
}
export default Users