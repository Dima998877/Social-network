import securityAPI from './securityApi';
import authAPI from './api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

enum ActionType {
  SET_USER_DATA = 'auth/SET_USER_DATA',
  GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS',
}
type Action<T> = {
  type: T;
};

interface IAction extends Action<ActionType> {
  payload?: unknown;
}
// const actionHasPayload = (action: Action<ActionType>): action is IAction =>
//   Boolean((action as object).hasOwnProperty('payload') && ActionType[action.type]);

type InitialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: string | null;
};

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (
  state = initialState,
  action: IAction
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
export const getAuthUserData = () => async (dispatch: any) => {
  const res = await authAPI.authMe();
  if (res.resultCode === 0) {
    const { id, email, login } = res.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};
export const login =
  (
    email: string | null,
    password: string | null,
    rememberMe: boolean,
    captcha: string | null
  ) =>
  async (dispatch: any) => {
    const res = await authAPI.login(email, password, rememberMe, captcha);
    if (res.resultCode === 0) {
      dispatch(getAuthUserData());
    } else if (res.resultCode === 10) {
      dispatch(getCaptcha());
    }
    const message = res.messages.length > 0 ? res.messages[0] : 'some error';
    // dispatch(stopSubmit('login', { _error: message }));
  };

export const logout = () => async (dispatch: any) => {
  const res = await authAPI.logout();
  if (res.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
export const getCaptchaUrlSuccess = (captchaUrl: string | null) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});
export const getCaptcha = () => async (dispatch: any) => {
  const res = await securityAPI.getCaptcha();
  const captchaUrl = res.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
