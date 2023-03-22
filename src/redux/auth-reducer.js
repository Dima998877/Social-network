import { authAPI } from '../API/Api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'auth/SET_USER_DATA'

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
         }
      default:
         return state;
   }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export const getAuthUserData = () => async (dispatch) => {
   let res = await authAPI.authMe()
   if (res.resultCode === 0) {
      let { id, email, login } = res.data
      dispatch(setAuthUserData(id, email, login, true))
   }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
   let res = await authAPI.login(email, password, rememberMe)
   if (res.resultCode === 0) {
      dispatch(getAuthUserData())
   } else {
      let message = res.messages.length > 0 ? res.messages[0] : 'some error';
      dispatch(stopSubmit('login', { _error: message }))
   }
}
export const logout = () => async (dispatch) => {
   let res = await authAPI.logout()
   if (res.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
   }
}
export default authReducer
