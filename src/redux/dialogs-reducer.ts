const ADD_MESSAGE = 'dialogs/ADD_MESSAGE';

type NewMessageActionType = {
  type: typeof ADD_MESSAGE;
  newMessageBody: string;
};

type DialogType = {
  name: string;
  id: number;
};
type MessageType = { id: number; message: string };
type InitialStateType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};

const initialState = {
  dialogs: [
    { name: 'Ann', id: 1 },
    { name: 'Pete', id: 2 },
    { name: 'Nick', id: 3 },
    { name: 'Marie', id: 4 },
  ],
  messages: [
    { id: 1, message: 'How are you today?' },
    { id: 2, message: 'Look what I found!' },
    { id: 3, message: 'Hi!' },
  ],
};

export const dialogsReducer = (
  state = initialState,
  action: NewMessageActionType
): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: 4, message: action.newMessageBody },
        ],
      };
    default:
      return state;
  }
};
export const addMessage = (newMessageBody: string): InitialStateType => ({
  type: ADD_MESSAGE,
  newMessageBody,
});
