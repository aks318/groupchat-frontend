import { SET_CHAT_SCREEN } from "./chatConstants";

const initialState: chatStateType = {
  activeScreen: "Chat",
};

const chatReducer = (
  state = initialState,
  action: ActionType
): chatStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

export default chatReducer;