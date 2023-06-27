// import { stopSubmit } from 'redux-form';
import profileAPI from './api';

const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_DATA = 'profile/SAVE_PROFILE_DATA';
const SET_IS_FETCHING = 'profile/SET_IS_FETCHING';

const initialState = {
  posts: [
    { id: 1, message: "Hello! It's my first message!", likesCount: '48' },
    { id: 2, message: 'Welcome to chat!', likesCount: '5' },
    { id: 3, message: 'Lol!', likesCount: '1' },
    { id: 4, message: 'Hi!', likesCount: '2' },
  ],
  profile: null,
  profileStatus: '',
  isFetching: false,
};

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
      return { ...state, posts: state.posts.filter((p) => p.id !== action.id) };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_PROFILE_STATUS:
      return { ...state, profileStatus: action.data };
    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    case SAVE_PROFILE_DATA:
      return {
        ...state,
        profile: { ...state.profile, photos: action.formData },
      };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.currentState };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const deletePostActionCreator = (id) => ({ type: DELETE_POST, id });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getUserProfile = (userId) => async (dispatch) => {
  dispatch(setIsFetching(true));
  let res = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(res));
  dispatch(setIsFetching(false));
};
export const setIsFetching = (currentState) => ({
  type: SET_IS_FETCHING,
  currentState,
});

export const setProfileStatus = (data) => ({ type: SET_PROFILE_STATUS, data });
export const getProfileStatus = (userId) => async (dispatch) => {
  const res = await profileAPI.getProfileStatus(userId);
  dispatch(setProfileStatus(res));
};
export const updateProfileStatus = (status) => async (dispatch) => {
  let res = await profileAPI.updateProfileStatus(status);
  if (res.resultCode === 0) {
    dispatch(setProfileStatus(status));
  }
};
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
export const savePhoto = (file) => async (dispatch) => {
  let res = await profileAPI.updatePhoto(file);
  if (res.resultCode === 0) {
    dispatch(savePhotoSuccess(res.data.photos));
  }
};

export const saveProfileData = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const res = await profileAPI.saveProfileData(profile);
  if (res.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    return Promise.reject(res.messages);
  }
};
export default profileReducer;
