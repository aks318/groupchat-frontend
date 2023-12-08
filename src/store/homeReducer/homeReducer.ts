import {
  CLEAR_HOME_STATE,
  HOME_SET_ALL_GROUP,
  HOME_SET_GROUP_DETAIL,
  HOME_SET_MY_ALL_GROUP,
  HOME_SET_TAB,
  HOME_UPDATE_GROUP_DETAIL,
  HOME_UPDATE_MY_ALL_GROUP,
} from "./homeConstants";

const initialState: homeStateType = {
  tab: "My group",
  myAllGroup: [],
  allGroup: [],
  groupDetail: {} as groupDetailType,
};

const homeReducer = (
  state = initialState,
  action: ActionType
): homeStateType => {
  switch (action.type) {
    case HOME_SET_TAB: {
      return { ...state, tab: action.payload };
    }
    case HOME_SET_MY_ALL_GROUP: {
      return { ...state, myAllGroup: [...action.payload, ...state.myAllGroup] };
    }
    case HOME_SET_ALL_GROUP: {
      return { ...state, allGroup: [...action.payload, ...state.allGroup] };
    }
    case HOME_SET_GROUP_DETAIL: {
      return { ...state, groupDetail: action.payload };
    }
    case HOME_UPDATE_GROUP_DETAIL: {
      return { ...state, groupDetail: action.payload };
    }
    case HOME_UPDATE_MY_ALL_GROUP: {
      const updatedData = state.myAllGroup.map((data) => {
        if (data.entityId === action.entityId) return action.payload;
        else return data;
      });
      return { ...state, myAllGroup: updatedData };
    }
    case CLEAR_HOME_STATE:
      return initialState;
    default:
      return state;
  }
};

export default homeReducer;
