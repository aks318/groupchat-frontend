import { HOME_SET_TAB } from "./homeConstants";

const initialState: homeStateType = {
  tab: "My group",
};

const homeReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case HOME_SET_TAB: {
      return { ...state, tab: action.payload };
    }
    default:
      return state;
  }
};

export default homeReducer;
