import API from "Utils/intercepter";

export const createGroup = async (groupName: string, entityId: string) => {
  try {
    await API.post("group/createGroup", { groupName, entityId });
  } catch (error) {
    console.log(error);
  }
};
export const getAllmygroup = (entityId: string) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
export const getGroups = (entityId: string) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
