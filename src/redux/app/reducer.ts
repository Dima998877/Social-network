import { getAuthUserData } from '../auth/reducer';

const INITIALISED_SUCCESSFUL = 'app/INITIALISED_SUCCESSFUL';
type InitialisedSuccessfulActionType = {
  type: typeof INITIALISED_SUCCESSFUL;
};
type InitialStateType = {
  initialised: boolean;
};

const initialState = {
  initialised: false,
};

const appReducer = (
  state = initialState,
  action: InitialisedSuccessfulActionType
): InitialStateType => {
  switch (action.type) {
    case INITIALISED_SUCCESSFUL:
      return {
        ...state,
        initialised: true,
      };
    default:
      return state;
  }
};

export const initialisedSuccessful = () => ({ type: INITIALISED_SUCCESSFUL });
export const initialiseApp = () => (dispatch: any) => {
  const promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initialisedSuccessful());
  });
};
export default appReducer;
