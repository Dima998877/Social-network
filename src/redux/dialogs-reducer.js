const add_message = 'ADD-MESSAGE'
const update_new_message_text = 'UPDATE-NEW-MESSAGE-TEXT'

export const dialogsReducer = (state, action) => {
   switch (action.type) {
      case add_message:
         let newMessage = {
            id: 4,
            message: state.newMessageText,
         }
         state.messages.push(newMessage)
         state.newMessageText = '';
         return state
      case update_new_message_text:
         state.newMessageText = action.newMessageText;
         return state
      default:
         return state;
   }
}
export const addMessageActionCreator = () => ({ type: add_message })

export const onMessageChangeActionCreator = (message) => ({
   type: update_new_message_text,
   newMessageText: message,
})