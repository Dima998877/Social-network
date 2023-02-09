const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
   posts: [
      { id: 1, message: "Hello! It's my first message!", likesCount: "48" },
      { id: 2, message: "Welcome to chat!", likesCount: "5" },
      { id: 3, message: "Lol!", likesCount: "1" },
      { id: 4, message: "Hi!", likesCount: "2" },
   ],
   newPostText: 'start typing your post',
   profile: null,
}

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: 
         let newPost = {
            id: 6,
            message: state.newPostText,
            likesCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
         };
      case UPDATE_NEW_POST_TEXT: 
         return {
            ...state,
            newPostText: action.newText};
      case SET_USER_PROFILE:
         return { ...state, profile: action.profile };
      default:
         return state;
   } 
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = (text) => ({
   type: UPDATE_NEW_POST_TEXT,
   newText: text,
})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

