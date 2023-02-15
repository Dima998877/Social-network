
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT= 'SET_TOTAL_USER_COUNT'
const SET_IS_FETCHING= 'SET_IS_FETCHING'
const TONGLE_FOLLOW_IN_PROGRESS= 'TONGLE_FOLLOW_IN_PROGRESS'

const initialState = {
      users: [ ],
      pageSize: 10,
      totalUsersCount: 1,
      currentPage: 1,
      isFetching: false,
      followInProgress: false
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state, 
            users: state.users.map( u => {
               if (u.id === action.userId) {
                  return {...u, followed: true}
               }
               return u
            })
         } 
      case UNFOLLOW:
         return {
            ...state, 
            users: state.users.map( u => {
               if (u.id === action.userId) {
                  return {...u, followed: false}
               }
               return u
            })
         } 
      case SET_USERS: 
         return {...state, users: action.users}
      case SET_CURRENT_PAGE:
         return {...state, currentPage: action.currentPage}
      case SET_TOTAL_USER_COUNT:
         return {...state, totalUsersCount: action.totalCount}
      case SET_IS_FETCHING:
         return {...state, isFetching: action.currentState}
      case TONGLE_FOLLOW_IN_PROGRESS:
         return {...state, followInProgress: action.currentState}
      default:
         return state;
   }
}
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USER_COUNT, totalCount })
export const setIsFetching = (currentState) => ({ type: SET_IS_FETCHING, currentState })
export const tongleFollowInProgress = (currentState) => ({ type: TONGLE_FOLLOW_IN_PROGRESS, currentState })
export default usersReducer
