import {
  CHAT_ADD_PEOPLE_PROFILES,
  CHAT_SET_PEOPLE_PROFILES,
  CLEAR_CHAT_STATE,
} from "./chatConstants";

const initialState: chatStateType = {
  peopleProfile: [],
};

const chatReducer = (
  state = initialState,
  action: ActionType
): chatStateType => {
  switch (action.type) {
    case CHAT_SET_PEOPLE_PROFILES:
      return { ...state, peopleProfile: action.payload };
    case CHAT_ADD_PEOPLE_PROFILES:
      return {
        ...state,
        peopleProfile: [...action.payload, ...state.peopleProfile],
      };
    case CLEAR_CHAT_STATE:
      return initialState;
    default:
      return state;
  }
};

export default chatReducer;
