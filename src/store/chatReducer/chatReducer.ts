import {
  CHAT_ADD_PEOPLE_PROFILES,
  CHAT_SET_PEOPLE_PROFILES,
  CLEAR_CHAT_DATA,
  CLEAR_CHAT_STATE,
  SET_CHAT_DATA,
} from "./chatConstants";

const initialState: chatStateType = {
  peopleProfile: [],
  chatData: [],
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
    case SET_CHAT_DATA:
      return {
        ...state,
        chatData: [...state.chatData, ...action.payload],
      };

    case CLEAR_CHAT_DATA:
      return {
        ...state,
        chatData: [],
      };
      return initialState;
    default:
      return state;
  }
};

export default chatReducer;
