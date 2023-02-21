import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow, tongleFollowInProgress, getUsers } from "../../redux/users-reducer";
import Users from './Users'
import Preloader from "../Common/Preloader/Preloader"
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   
   }
   onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize)
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
               followInProgress={this.props.followInProgress}
               tongleFollowInProgress={this.props.tongleFollowInProgress}
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
      isFetching: state.usersPage.isFetching,
      followInProgress: state.usersPage.followInProgress
   }
}

export default compose(
   connect(mapStateToProps, {follow, unfollow, setCurrentPage, tongleFollowInProgress, getUsers
   }),
   withAuthRedirect
)(UsersContainer)
