import API from "Utils/intercepter";

export const addPeople = async (
  grpEntityId: string,
  entityIdList: string[]
) => {
  try {
    const res = await API.post("group/addPeople", {
      grpEntityId,
      entityIdList,
    });
  } catch (error) {
    console.log(error);
  }
};
