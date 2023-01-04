let state = {
   profilePage: {
      posts: [
         { id: 1, message: "Hello! It's my first message!", likesCount: "48" },
         { id: 2, message: "Welcome to chat!", likesCount: "5" },
         { id: 3, message: "Lol!", likesCount: "1" },
         { id: 4, message: "Hi!", likesCount: "2" },
      ],
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
}
export default state;