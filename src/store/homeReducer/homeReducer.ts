import {
  HOME_SET_ALL_GROUP,
  HOME_SET_MY_ALL_GROUP,
  HOME_SET_TAB,
} from "./homeConstants";

const initialState: homeStateType = {
  tab: "My group",
  myAllGroup: [],
  allGroup: [],
};

const homeReducer = (state = initialState, action: ActionType) => {
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
    default:
      return state;
  }
};

export default homeReducer;
