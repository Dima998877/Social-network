const add_message = 'ADD-MESSAGE'
const update_new_message_text = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
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
      newMessageText: 'all work',
}

export const dialogsReducer = (state = initialState, action) => {
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