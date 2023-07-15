import React from 'react';

import Paginator from '../common/Paginatator/Paginator';
import User from '../User/User';
import { UserType } from '../../redux/users/reducer';

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  onPageChanged: (pageNumber: number) => void;
  currentPage: number;
  users: Array<UserType>;
  followInProgress: Array<number>;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  tongleFollowInProgress: (isFetching: boolean, userId: number) => void;
};

const Users: React.FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
  users,
  followInProgress,
  unfollow,
  follow,
}) => {
  return (
    <div>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
      {users.map((u) => (
        <User
          key={u.id}
          user={u}
          followInProgress={followInProgress}
          unfollow={unfollow}
          follow={follow}
        />
      ))}
    </div>
  );
};
export default Users;
