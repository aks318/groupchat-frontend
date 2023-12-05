import API from "./intercepter";

export const updateSocket = async (socketid: string, entityId: string) => {
  await API.post("user/updateSocket", { socketid, entityId });
};
