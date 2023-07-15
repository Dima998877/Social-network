export type Action<T extends ActionTypes> = {
  type: T;
};

export enum ActionTypes {
  ADD_POST = 'profile/ADD_POST',
  DELETE_POST = 'profile/DELETE_POST',
  SET_USER_PROFILE = 'profile/SET_USER_PROFILE',
  SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS',
  SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS',
  SAVE_PROFILE_DATA = 'profile/SAVE_PROFILE_DATA',
  SET_IS_FETCHING = 'profile/SET_IS_FETCHING',
}
export interface IAction extends Action<ActionTypes> {
  currentState: boolean;
  data: string;
  id: number;
  formData: any;
  newPostText: string;
  posts: Array<PostsType>;
  profile: null | ProfileType;
  profileStatus: string;
  photos: PhotosType;
  // isFetching: boolean;
}
export type PostsType = {
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
export type PhotosType = {
  small: string;
  large: string;
};
export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};
export type InitialStateType = {
  posts: Array<PostsType>;
  profile: null | ProfileType;
  profileStatus: string;
  isFetching: boolean;
  newPostText: string;
};
