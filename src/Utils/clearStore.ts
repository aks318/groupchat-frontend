import { CLEAR_AUTH_STATE } from "store/authReducer/authConstants";
import { store } from "store/store";

export const clearStore = () => {
  store.dispatch({
    type: CLEAR_AUTH_STATE,
  });
};
