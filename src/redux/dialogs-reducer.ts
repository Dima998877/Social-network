const ADD_MESSAGE = 'dialogs/ADD_MESSAGE';

export type NewMessageActionType = {
  type: typeof ADD_MESSAGE;
  newMessageBody: string;
};
// export type dialogsType = {
//   name: string;
//   id: string;
// }[];

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
export type MessageInitialStateType = typeof initialState;

export const dialogsReducer = (
  state = initialState,
  action: NewMessageActionType
): MessageInitialStateType => {
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
export const addMessage = (newMessageBody: string): NewMessageActionType => ({
  type: ADD_MESSAGE,
  newMessageBody,
});
