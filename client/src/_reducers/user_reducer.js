import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART,
  SHOW_TO_CART,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSucces: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
    case ADD_TO_CART:
      return {
        ...state,
        userData: {
          ...state.userData,
          card: action.payload,
        },
      };
    case SHOW_TO_CART:
      return { ...state };
    default:
      return state;
  }
}
