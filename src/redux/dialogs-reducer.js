const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

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
      newMessageText: 'all works fine',
}

export const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         let newMessage = {
            id: 4,
            message: state.newMessageText,
         }
         return {
            ...state,
            messages: [...state.messages, newMessage],
            newMessageText: ''
         }
   
      case UPDATE_NEW_MESSAGE_TEXT:
         return {
            ...state,
            newMessageText: action.newMessageText
         }
   
      default:
         return state;
   }
}
export const addMessage = () => ({ type: ADD_MESSAGE })

export const updateNewMessage = (message) => ({
   type: UPDATE_NEW_MESSAGE_TEXT,
   newMessageText: message,
})