import { CLEAR_CHAT_STATE } from "./chatConstants";

const initialState: chatStateType = {
  activeScreen: "Chat",
};

const chatReducer = (
  state = initialState,
  action: ActionType
): chatStateType => {
  switch (action.type) {
    case CLEAR_CHAT_STATE:
      return initialState;
    default:
      return state;
  }
};

export default chatReducer;
