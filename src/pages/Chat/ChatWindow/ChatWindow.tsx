import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import MessageBox from "./MessageBox";

const ChatWindow = () => {
  const { peopleProfile } = useSelector((state: AppState) => state.chatReducer);
  const { chatData } = useSelector((state: AppState) => state.chatReducer);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to the bottom when chatData changes
    if (lastMessageRef.current && chatData.length) {
      console.log("inside");
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [chatData]);

  const getPropfileInfo = (userEntityid: string): userDetailsType | void => {
    const findUser = peopleProfile.find(
      (data) => data.entityId === userEntityid
    );
    if (findUser) return findUser;
  };
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
      {chatData.map((data, index) => {
        const profileInfo = getPropfileInfo(data.userEntityid);
        const isLastMessage = index === chatData.length - 1;
        if (profileInfo) {
          return (
            <MessageBox
              key={data.entityId}
              ref={isLastMessage ? lastMessageRef : null}
              data={data}
              profileInfo={profileInfo}
            />
          );
        } else return undefined;
      })}
    </Box>
  );
};

export default ChatWindow;
