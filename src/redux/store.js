
import React from 'react';
import ReactDOM from 'react-dom/client';
import { dialogsReducer } from './dialogs-reducer';
import { friendsBarReducer } from './friendsBar-reducer';
import { profileReducer } from './profile-reducer';

// const add_post = 'ADD-POST'
// const update_new_post_text = 'UPDATE-NEW-POST-TEXT'
// const add_message = 'ADD-MESSAGE'
// const update_new_message_text = 'UPDATE-NEW-MESSAGE-TEXT'

const store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: "Hello! It's my first message!", likesCount: "48" },
            { id: 2, message: "Welcome to chat!", likesCount: "5" },
            { id: 3, message: "Lol!", likesCount: "1" },
            { id: 4, message: "Hi!", likesCount: "2" },
         ],
         newPostText: 'start typing your post',
      },
      dialogsPage: {
         dialogs: [
            { name: 'Ann', id: '1' },
            { name: 'Pete', id: '2' },
            { name: 'Nick', id: '3' },
            { name: 'Marie', id: '4' },
         ],
         messages: [
            { id: '1', message: 'How are you today?' },
            { id: '2', message: 'Look what I found!' },
            { id: '3', message: 'Hi!' },
         ],
         newMessageText: 'all work'
      },
      friendsBar: {
         friendsData: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Ann' },
            { id: 3, name: 'Marie' },
            { id: 4, name: 'Pete' },
            { id: 5, name: 'Mike' }
         ],
      },
   },
   _callSubscriber() { },

   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
      this._state.friendsBar = friendsBarReducer(this._state.friendsBar, action)
      this._callSubscriber(this._state);

      //    if (action.type === add_post) {
      //       let newPost = {
      //          id: 6,
      //          message: this._state.profilePage.newPostText,
      //          likesCount: 0,
      //       };
      //       this._state.profilePage.posts.push(newPost);
      //       this._state.profilePage.newPostText = '';
      //       this._callSubscriber(this._state);
      //    }
      //    else if (action.type === update_new_post_text) {
      //       this._state.profilePage.newPostText = action.newText;
      //       this._callSubscriber(this._state);
      //    }
      //    else if (action.type === add_message) {
      //       let newMessage = {
      //          id: 4,
      //          message: this._state.dialogsPage.newMessageText,
      //       }
      //       this._state.dialogsPage.messages.push(newMessage)
      //       this._state.dialogsPage.newMessageText = '';
      //       this._callSubscriber(this._state);
      //    }
      //    else if (action.type === update_new_message_text) {
      //       this._state.dialogsPage.newMessageText = action.newMessageText;
      //       this._callSubscriber(this._state);
      //    }
   }
};

// export const addMessageActionCreator = () => ({ type: add_message})

// export const onMessageChangeActionCreator = (message) => ({
//    type: update_new_message_text,
//    newMessageText: message,
// })

// export const addPostActionCreator = () => ({ type: add_post })

// export const onPostChangeActionCreator = (text) => ({
//    type: update_new_post_text,
//    newText: text,
// })

export default store;