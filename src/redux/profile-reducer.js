import { profileAPI } from '../API/Api'

const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

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
         return { ...state, posts: state.posts.filter(p => p.id !== action.id) }
      case SET_USER_PROFILE:
         return { ...state, profile: action.profile };
      case SET_PROFILE_STATUS:
         return { ...state, profileStatus: action.data };
      case SAVE_PHOTO_SUCCESS:
         return { ...state, profile: { ...state.profile, photos: action.photos } };
      default:
         return state;
   }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const deletePostActionCreator = (id) => ({ type: DELETE_POST, id })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => async (dispatch) => {
   let res = await profileAPI.getProfile(userId)
   dispatch(setUserProfile(res))
}

export const setProfileStatus = (data) => ({ type: SET_PROFILE_STATUS, data })
export const getProfileStatus = (userId) => async (dispatch) => {
   let res = await profileAPI.getProfileStatus(userId)
   dispatch(setProfileStatus(res))
}

export const updateProfileStatus = (status) => async (dispatch) => {
   let res = await profileAPI.updateProfileStatus(status)
      if (res.resultCode === 0) {
         dispatch(setProfileStatus(status))
      }
   }
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
export const savePhoto = (file) => async (dispatch) => {
   let res = await profileAPI.updatePhoto(file)
      if (res.resultCode === 0) {
         dispatch(savePhotoSuccess(res.data.photos))
      }
   }
export default profileReducer
