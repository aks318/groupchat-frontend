import API from "Utils/intercepter";
import { SET_MESSAGE } from "store/authReducer/authConstants";
import {
  HOME_SET_ALL_GROUP,
  HOME_SET_MY_ALL_GROUP,
} from "store/homeReducer/homeConstants";
import { store } from "store/store";

export const createGroup = async (groupName: string, entityId: string) => {
  try {
    const res = await API.post("group/createGroup", { groupName, entityId });
    store.dispatch({
      type: SET_MESSAGE,
      payload: {
        text: "Group Created.",
        status: "success",
      },
    });
    store.dispatch({
      type: HOME_SET_MY_ALL_GROUP,
      payload: [res.data.data.groupData],
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAllmygroup = async (entityId: string) => {
  try {
    const res = await API.get("group/getAllmygroup", {
      params: {
        ownerId: entityId,
      },
    });
    store.dispatch({
      type: HOME_SET_MY_ALL_GROUP,
      payload: res.data.data.groupList,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getGroups = async (entityId: string) => {
  const res = await API.get("group/getGroups", {
    params: {
      entityId,
    },
  });
  store.dispatch({
    type: HOME_SET_ALL_GROUP,
    payload: res.data.data.groupList,
  });
  try {
  } catch (error) {
    console.log(error);
  }
};
