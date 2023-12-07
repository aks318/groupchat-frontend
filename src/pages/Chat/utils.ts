import API from "Utils/intercepter";
import { SET_MESSAGE } from "store/authReducer/authConstants";
import {
  HOME_UPDATE_GROUP_DETAIL,
  HOME_UPDATE_MY_ALL_GROUP,
} from "store/homeReducer/homeConstants";
import { store } from "store/store";

export const addPeople = async (
  grpEntityId: string,
  entityIdList: string[]
) => {
  try {
    const res = await API.post("group/addPeople", {
      grpEntityId,
      entityIdList,
    });
    store.dispatch({
      type: HOME_UPDATE_GROUP_DETAIL,
      payload: res.data.data.groupDetail,
    });
    store.dispatch({
      type: HOME_UPDATE_MY_ALL_GROUP,
      payload: res.data.data.groupDetail,
      entityId: res.data.data.groupDetail.entityId,
    });
    store.dispatch({
      type: SET_MESSAGE,
      payload: {
        text: `${entityIdList.length} People Added.`,
        status: "success",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
