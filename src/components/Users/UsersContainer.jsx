import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, setIsFetching } from "../../redux/users-reducer";
import Users from './Users'
import Preloader from "../Common/Preloader/Preloader"
import {usersAPI} from '../../API/Api';


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.setIsFetching(true)
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
         this.props.setUsers(data.items)
         this.props.setTotalUsersCount(data.totalCount)
         this.props.setIsFetching(false)
      })
   }
   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.setIsFetching(true)
      usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
         this.props.setIsFetching(false)
         this.props.setUsers(data.items)
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

