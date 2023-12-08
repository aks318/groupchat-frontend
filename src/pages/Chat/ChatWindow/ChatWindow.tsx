import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import MessageBox from "./MessageBox";

const ChatWindow = () => {
  const { peopleProfile } = useSelector((state: AppState) => state.chatReducer);
  const getPropfileInfo = (userEntityid: string): userDetailsType | void => {
    const findUser = peopleProfile.find(
      (data) => data.entityId === userEntityid
    );
    if (findUser) return findUser;
  };
  const { chatData } = useSelector((state: AppState) => state.chatReducer);
  return (
    <Box
      sx={{
        flex: 1,
        p: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflow: "auto",
      }}
    >
      {chatData.map((data) => {
        const profileInfo = getPropfileInfo(data.userEntityid);
        if (profileInfo) {
          return (
            <MessageBox
              key={data.entityId}
              data={data}
              profileInfo={profileInfo}
            />
          );
        } else return <></>;
      })}
    </Box>
  );
};

export default ChatWindow;
