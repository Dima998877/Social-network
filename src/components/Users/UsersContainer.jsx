import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow, tongleFollowInProgress, requestUsers } from "../../redux/users-reducer";
import Users from './Users'
import Preloader from "../Common/Preloader/Preloader"
import { compose } from 'redux';
import { getCurrentPage, getFollowInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selector';

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
      users: getUsers(state),
      totalUsersCount: getTotalUsersCount(state),
      pageSize: getPageSize(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followInProgress: getFollowInProgress(state)
   }
}

export default compose(
   connect(mapStateToProps, {follow, unfollow, setCurrentPage, tongleFollowInProgress, getUsers: requestUsers
   }),
)(UsersContainer)
