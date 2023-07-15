import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { InitialStateType, UserType } from '../../redux/users/reducer';
import {
  follow,
  setCurrentPage,
  unfollow,
  tongleFollowInProgress,
  requestUsers,
} from '../../redux/users/reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {
  getCurrentPage,
  getFollowInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from '../../redux/users/selector';
import { AppStateType } from '../../redux/store';

type PropsType = {
  users: Array<UserType>;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  followInProgress: Array<number>;

  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setCurrentPage: (pageNumber: number) => void;
  tongleFollowInProgress: (isFetching: boolean, userId: number) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
};

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  }
  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.getUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
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
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followInProgress: getFollowInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    tongleFollowInProgress,
    getUsers: requestUsers,
  })
)(UsersContainer);
