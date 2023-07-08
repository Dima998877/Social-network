import usersAPI from './api';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'users/SET_TOTAL_USER_COUNT';
const SET_IS_FETCHING = 'users/SET_IS_FETCHING';
const TONGLE_FOLLOW_IN_PROGRESS = 'users/TONGLE_FOLLOW_IN_PROGRESS';

enum ActionType {
  FOLLOW = 'users/FOLLOW',
  UNFOLLOW = 'users/UNFOLLOW',
  SET_USERS = 'users/SET_USERS',
  SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE',
  SET_TOTAL_USER_COUNT = 'users/SET_TOTAL_USER_COUNT',
  SET_IS_FETCHING = 'users/SET_IS_FETCHING',
  TONGLE_FOLLOW_IN_PROGRESS = 'users/TONGLE_FOLLOW_IN_PROGRESS',
}

type Action<T> = {
  type: T;
};

interface IAction extends Action<ActionType> {
  userId: number;
  users: Array<UserType>;
  currentPage: number;
  totalCount: number;
  currentState: boolean;
  followInProgress: Array<number>;
}
type UserType = {
  count: number;
  page: number;
  term: string;
  friend: boolean;
};

type InitialStateType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followInProgress: Array<number>;
};

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 1,
  currentPage: 1,
  isFetching: false,
  followInProgress: [],
};

const usersReducer = (
  state = initialState,
  action: IAction
): InitialStateType => {
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
export const followSuccess = (userId: number) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId: number) => ({ type: UNFOLLOW, userId });
export const setUsers = (users: UserType) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalCount: number) => ({
  type: SET_TOTAL_USER_COUNT,
  totalCount,
});
export const setIsFetching = (currentState: boolean) => ({
  type: SET_IS_FETCHING,
  currentState,
});
export const tongleFollowInProgress = (
  currentState: boolean,
  userId: number
) => ({
  type: TONGLE_FOLLOW_IN_PROGRESS,
  currentState,
  userId,
});

export const requestUsers = (page: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(setIsFetching(true));
    const res = await usersAPI.getUsers(page, pageSize);
    dispatch(setCurrentPage(page));
    dispatch(setIsFetching(false));
    dispatch(setUsers(res.items));
    dispatch(setTotalUsersCount(res.totalCount));
  };
};
export const follow = (userId: number) => {
  return async (dispatch) => {
    dispatch(tongleFollowInProgress(true, userId));
    const res = await usersAPI.setFollow(userId);
    if (res.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(tongleFollowInProgress(false, userId));
  };
};
export const unfollow = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(tongleFollowInProgress(true, userId));
    const res = await usersAPI.setUnfollow(userId);
    if (res.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(tongleFollowInProgress(false, userId));
  };
};
export default usersReducer;
