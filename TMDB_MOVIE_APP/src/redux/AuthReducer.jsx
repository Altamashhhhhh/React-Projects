import { CHECK_USER_LOGIN, LOGIN_USER, USER_LOGOUT } from "./action";

const initialState = {
  isLogged: !!localStorage.getItem("currentUserId"),
  currentUserId: localStorage.getItem("currentUserId") || null,
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogged: payload.isLogged,
        currentUserId: payload.userId,
      };
    case CHECK_USER_LOGIN:
      return {
        ...state,
        isLogged: payload.status,
        currentUserId: payload.userId,
      };
    case USER_LOGOUT : 
    return {...state , isLogged : false , currentUserId : null}
    default:
      return state;
  }
};
