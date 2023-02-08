import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, setIsFetching } from "../../redux/users-reducer";
import Axios from 'axios'
import Users from './Users'
import Preloader from "../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.setIsFetching(true)
      Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setIsFetching(false)
         })
   }
   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.setIsFetching(true)
      Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then((response) => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
         })
   }

   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : 
         <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
         />}
      </>
   }

}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      pageSize: state.usersPage.pageSize,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
   }
}


export default connect(mapStateToProps, {
   follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching
})(UsersContainer)

