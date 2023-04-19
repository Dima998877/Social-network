import usersAPI from './api';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'users/SET_TOTAL_USER_COUNT';
const SET_IS_FETCHING = 'users/SET_IS_FETCHING';
const TONGLE_FOLLOW_IN_PROGRESS = 'users/TONGLE_FOLLOW_IN_PROGRESS';

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 1,
  currentPage: 1,
  isFetching: false,
  followInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USER_COUNT:
      return { ...state, totalUsersCount: action.totalCount };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.currentState };
    case TONGLE_FOLLOW_IN_PROGRESS:
      return {
        ...state,
        followInProgress: action.currentState
          ? [...state.followInProgress, action.userId]
          : state.followInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USER_COUNT,
  totalCount,
});
export const setIsFetching = (currentState) => ({
  type: SET_IS_FETCHING,
  currentState,
});
export const tongleFollowInProgress = (currentState, userId) => ({
  type: TONGLE_FOLLOW_IN_PROGRESS,
  currentState,
  userId,
});

export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    let res = await usersAPI.getUsers(page, pageSize);
    dispatch(setCurrentPage(page));
    dispatch(setIsFetching(false));
    dispatch(setUsers(res.items));
    dispatch(setTotalUsersCount(res.totalCount));
  };
};
export const follow = (userId) => {
  return async (dispatch) => {
    dispatch(tongleFollowInProgress(true, userId));
    let res = await usersAPI.setFollow(userId);
    if (res.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(tongleFollowInProgress(false, userId));
  };
};
export const unfollow = (userId) => {
  return async (dispatch) => {
    dispatch(tongleFollowInProgress(true, userId));
    let res = await usersAPI.setUnfollow(userId);
    if (res.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(tongleFollowInProgress(false, userId));
  };
};
export default usersReducer;
