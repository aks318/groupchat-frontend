import { CLEAR_AUTH_STATE } from "store/authReducer/authConstants";
import { CLEAR_CHAT_STATE } from "store/chatReducer/chatConstants";
import { CLEAR_HOME_STATE } from "store/homeReducer/homeConstants";
import { store } from "store/store";

export const clearStore = () => {
  store.dispatch({
    type: CLEAR_AUTH_STATE,
  });
  store.dispatch({
    type: CLEAR_HOME_STATE,
  });
  store.dispatch({
    type: CLEAR_CHAT_STATE,
  });
};
