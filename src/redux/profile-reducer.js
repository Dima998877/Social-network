const add_post = 'ADD-POST'
const update_new_post_text = 'UPDATE-NEW-POST-TEXT'

const initialState = {
   posts: [
      { id: 1, message: "Hello! It's my first message!", likesCount: "48" },
      { id: 2, message: "Welcome to chat!", likesCount: "5" },
      { id: 3, message: "Lol!", likesCount: "1" },
      { id: 4, message: "Hi!", likesCount: "2" },
   ],
   newPostText: 'start typing your post',
}

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case add_post: 
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
      case update_new_post_text: 
         return {
            ...state,
            newPostText: action.newText};
      default:
         return state;
   } 
}

export const addPostActionCreator = () => ({ type: add_post })
export const onPostChangeActionCreator = (text) => ({
   type: update_new_post_text,
   newText: text,
})
