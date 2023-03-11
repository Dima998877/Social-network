import { authAPI } from '../API/Api'
const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.payload,
            isAuth: true,
         }
      default:
         return state;
   }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export default authReducer
export const getAuthUserData = () => (dispatch) => {
      authAPI.authMe().then((data) => {
         if (data.resultCode === 0) {
            let { id, email, login } = data.data
            dispatch(setAuthUserData(id, email, login, true))
         }
      })
   }
export const login = (email, password, rememberMe) => (dispatch) => {
      authAPI.login(email, password, rememberMe).then( data => {
         if (data.resultCode === 0) {
            dispatch(getAuthUserData())
         //    let {email, password, rememberMe } = data.data
         //    dispatch(setAuthUserData(id, email, login))
         }
      })
   }
export const logout = () => (dispatch) => {
      authAPI.logout().then( data => {
         if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
         }
      })
   }
