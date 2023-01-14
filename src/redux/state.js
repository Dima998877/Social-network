import { renderEntireTree } from "../render";

let state = {
   profilePage: {
      posts: [
         { id: 1, message: "Hello! It's my first message!", likesCount: "48" },
         { id: 2, message: "Welcome to chat!", likesCount: "5" },
         { id: 3, message: "Lol!", likesCount: "1" },
         { id: 4, message: "Hi!", likesCount: "2" },
      ],
      newPostText: 'Neww text',
   },
   dialogsPage: {
      dialogs: [
         { name: 'Ann', id: '1' },
         { name: 'Pete', id: '2' },
         { name: 'Nick', id: '3' },
         { name: 'Marie', id: '4' },
      ],
      messages: [
         { message: 'How are you today?', id: '1' },
         { message: 'Look what I found!', id: '2' },
         { message: 'Hi!', id: '3' },
      ],
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
};

export let addPost = (postMessage) => {
   let newPost = {
      id: 6,
      message: postMessage,
      likesCount: 0,
   };
   state.profilePage.posts.push(newPost);
   renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   renderEntireTree(state);
}

export default state;