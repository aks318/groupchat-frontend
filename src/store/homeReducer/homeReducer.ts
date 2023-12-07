import {
  HOME_SET_ALL_GROUP,
  HOME_SET_GROUP_DETAIL,
  HOME_SET_MY_ALL_GROUP,
  HOME_SET_TAB,
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
      return { ...state, myAllGroup: [...state.myAllGroup, ...action.payload] };
    }
    case HOME_SET_ALL_GROUP: {
      return { ...state, allGroup: action.payload };
    }
    case HOME_SET_GROUP_DETAIL: {
      return { ...state, groupDetail: action.payload };
    }
    default:
      return state;
  }
};

export default homeReducer;
