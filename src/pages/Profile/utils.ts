import API from "Utils/intercepter";
import { SET_MESSAGE, SET_USER_DETAILS } from "store/authReducer/authConstants";
import { store } from "store/store";

export const updateUser = async (
  name: string,
  username: string,
  entityId: string
) => {
  try {
    const res = await API.post("user/updateUser", { name, username, entityId });
    store.dispatch({
      type: SET_MESSAGE,
      payload: {
        text: "Details Updated.",
        status: "success",
      },
    });
    store.dispatch({
      type: SET_USER_DETAILS,
      payload: res.data.data.userDetails,
    });
  } catch (error) {
    console.log(error);
  }
};

export const changeAvatar = async (avatarId: number, entityId: string) => {
  try {
    const res = await API.post("user/changeAvatar", { avatarId, entityId });
    store.dispatch({
      type: SET_MESSAGE,
      payload: {
        text: "Avatar Changed.",
        status: "success",
      },
    });
    store.dispatch({
      type: SET_USER_DETAILS,
      payload: res.data.data.userDetails,
    });
  } catch (error) {
    console.log(error);
  }
};
