import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Axios from'axios'
import Users from './Users'


class UsersContainer extends React.Component {
   componentDidMount() {
      Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }
   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
         this.props.setUsers(response.data.items)
      })}

   render () {
      return <Users 
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      onPageChanged={this.onPageChanged}
      currentPage={this.props.currentPage}
      users={this.props.users}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
      /> 
      
   }

}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      pageSize: state.usersPage.pageSize,
      currentPage: state.usersPage.currentPage
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => { dispatch(followAC(userId)) },
      unfollow: (userId) => { dispatch(unfollowAC(userId)) },
      setUsers: (users) => { dispatch(setUsersAC(users)) },
      setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
      setTotalUsersCount: (totalCount) => {dispatch(setTotalUserCountAC(totalCount))}
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

