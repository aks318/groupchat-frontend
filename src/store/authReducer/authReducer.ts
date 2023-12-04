import {
  SET_AUTH_TOKEN,
  SET_LOGGED_IN,
  SET_USER_DETAILS,
} from "./authConstants";

const initialState: authStateType = {
  isLoader: false,
  token: "",
  isLoggedIn: false,
  userDetails: {} as userDetailsType,
  message: {
    text: "",
    status: "success",
  },
};

const authReduce = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_AUTH_TOKEN: {
      return { ...state, token: action.payload };
    }
    case SET_LOGGED_IN: {
      return { ...state, isLoggedIn: action.payload };
    }
    case SET_USER_DETAILS: {
      return { ...state, userDetails: action.payload };
    }
    default:
      return state;
  }
};

export default authReduce;
