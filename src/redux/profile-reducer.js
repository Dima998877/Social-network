import { profileAPI } from '../API/Api'
const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

const initialState = {
   posts: [
      { id: 1, message: "Hello! It's my first message!", likesCount: "48" },
      { id: 2, message: "Welcome to chat!", likesCount: "5" },
      { id: 3, message: "Lol!", likesCount: "1" },
      { id: 4, message: "Hi!", likesCount: "2" },
   ],
   profile: null,
   profileStatus: ''
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: 
         let newPost = {
            id: 6,
            message: action.newPostText,
            likesCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
         };
      case DELETE_POST:
         return {...state, posts: state.posts.filter(p => p.id !== action.id)}
      case SET_USER_PROFILE:
         return { ...state, profile: action.profile };
      case SET_PROFILE_STATUS:
         return { ...state, profileStatus: action.data };
      default:
         return state;
   } 
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const deletePostActionCreator = (id) => ({ type: DELETE_POST, id })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile =(userId) => (dispatch) => {
   profileAPI.getProfile(userId).then( data => dispatch(setUserProfile(data)))
   }

export const setProfileStatus = (data) => ({ type: SET_PROFILE_STATUS, data})
export const getProfileStatus = (userId) => (dispatch) => {
   profileAPI.getProfileStatus(userId).then(data => dispatch(setProfileStatus(data)))
}

export const updateProfileStatus = (status) => (dispatch) => {
   profileAPI.updateProfileStatus(status).then(data => {
      if (data.resultCode === 0){
      dispatch(setProfileStatus(status))
   }
   })
}

export default profileReducer
