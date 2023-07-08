// import { stopSubmit } from 'redux-form';
import profileAPI from './api';

const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_DATA = 'profile/SAVE_PROFILE_DATA';
const SET_IS_FETCHING = 'profile/SET_IS_FETCHING';

type Action<T> = {
  type: T;
  posts: Array<PostsType>;
  profile: null | ProfileType;
  profileStatus: string;
  isFetching: boolean;
  newPostText: string;
  id: number;
  data: string;
  formData: any;
};

enum ActionTypes {
  ADD_POST = 'profile/ADD_POST',
  DELETE_POST = 'profile/DELETE_POST',
  SET_USER_PROFILE = 'profile/SET_USER_PROFILE',
  SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS',
  SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS',
  SAVE_PROFILE_DATA = 'profile/SAVE_PROFILE_DATA',
  SET_IS_FETCHING = 'profile/SET_IS_FETCHING',
}

type PostsType = {
  id: number;
  message: string;
  likesCount: number;
};
type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
type PhotosType = {
  small: string;
  large: string;
};
type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};
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
type InitialStateType = typeof initialState;
const profileReducer = (
  state: InitialStateType = initialState,
  action: Action<ActionTypes>
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
type AddPostACType = {
  type: typeof ADD_POST;
  newPostText: string;
};
type DeletePostACType = {
  type: typeof DELETE_POST;
  id: number;
};
type SetUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
type SetProfileStatusType = { type: typeof SET_PROFILE_STATUS; data: string };
type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};
type setIsFetchingType = {
  type: typeof SET_IS_FETCHING;
  currentState: boolean;
};

export const addPostAC = (newPostText: string): AddPostACType => ({
  type: ADD_POST,
  newPostText,
});
export const deletePostActionCreator = (id: number): DeletePostACType => ({
  type: DELETE_POST,
  id,
});

export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getUserProfile = (userId: number) => async (dispatch: any) => {
  dispatch(setIsFetching(true));
  const res = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(res));
  dispatch(setIsFetching(false));
};
export const setIsFetching = (currentState: boolean): setIsFetchingType => ({
  type: SET_IS_FETCHING,
  currentState,
});

export const setProfileStatus = (data: string): SetProfileStatusType => ({
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
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({
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
  (profile: PhotosType) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const res = await profileAPI.saveProfileData(profile);
    if (res.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      return Promise.reject(res.messages);
    }
  };
export default profileReducer;
