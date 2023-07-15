import {
  ADD_POST,
  DELETE_POST,
  SAVE_PHOTO_SUCCESS,
  SAVE_PROFILE_DATA,
  SET_IS_FETCHING,
  SET_PROFILE_STATUS,
  SET_USER_PROFILE,
} from './actions';
import profileAPI from './api';
import { InitialStateType, ProfileType, PhotosType, PostsType } from './types';

const initialState = {
  posts: [
    { id: 1, message: "Hello! It's my first message!", likesCount: 48 },
    { id: 2, message: 'Welcome to chat!', likesCount: 5 },
    { id: 3, message: 'Lol!', likesCount: 1 },
    { id: 4, message: 'Hi!', likesCount: 2 },
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  profileStatus: '',
  isFetching: false,
  newPostText: '',
};
const profileReducer = (
  state = initialState,
  action: IAction
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 6,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case DELETE_POST:
      return { ...state, posts: state.posts.filter((p) => p.id !== action.id) };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_PROFILE_STATUS:
      return { ...state, profileStatus: action.data };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    case SAVE_PROFILE_DATA:
      return {
        ...state,
        profile: { ...state.profile, photos: action.formData } as ProfileType,
      };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.currentState };
    default:
      return state;
  }
};

export const addPostAC = (newPostText: string) => ({
  type: ADD_POST,
  newPostText,
});
export const deletePostActionCreator = (id: number) => ({
  type: DELETE_POST,
  id,
});

export const setUserProfile = (profile: ProfileType) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  dispatch(setIsFetching(true));
  const res = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(res));
  dispatch(setIsFetching(false));
};
export const setIsFetching = (currentState: boolean) => ({
  type: SET_IS_FETCHING,
  currentState,
});

export const setProfileStatus = (data: string) => ({
  type: SET_PROFILE_STATUS,
  data,
});
export const getProfileStatus = (userId: number) => async (dispatch: any) => {
  const res = await profileAPI.getProfileStatus(userId);
  dispatch(setProfileStatus(res));
};
export const updateProfileStatus =
  (status: string) => async (dispatch: any) => {
    const res = await profileAPI.updateProfileStatus(status);
    if (res.resultCode === 0) {
      dispatch(setProfileStatus(status));
    }
  };
export const savePhotoSuccess = (photos: PhotosType) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
export const savePhoto = (file: any) => async (dispatch: any) => {
  const res = await profileAPI.updatePhoto(file);
  if (res.resultCode === 0) {
    dispatch(savePhotoSuccess(res.data.photos));
  }
};

export const saveProfileData =
  (profile: ProfileType) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const res = await profileAPI.saveProfileData(profile);
    if (res.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      return Promise.reject(res.messages);
    }
  };
export default profileReducer;
