const ADD_MESSAGE = 'dialogs/ADD_MESSAGE';

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
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: body }],
      };
    default:
      return state;
  }
};
export const addMessage = (newMessageBody) => ({
  type: ADD_MESSAGE,
  newMessageBody,
});
