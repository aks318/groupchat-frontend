import { Box, Typography } from "@mui/material";
import Header from "./Header";
import InputBox from "./InputBox";
import { useDispatch, useSelector } from "react-redux";
import Chat1 from "Images/chat1.svg";
import { theme } from "Utils/theme";
import { useEffect, useState } from "react";
import Detail from "./Detail/Detail";
import { getAllGroupChat, getPeopleProfile } from "./utils";
import ChatWindow from "./ChatWindow/ChatWindow";
import {
  CLEAR_CHAT_DATA,
  SET_CHAT_DATA,
} from "store/chatReducer/chatConstants";
import { socket } from "socket";

const Chat = () => {
  const { groupDetail } = useSelector((state: AppState) => state.homeReducer);
  const [detailActive, setDetailActive] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (JSON.stringify(groupDetail) !== "{}") {
      getPeopleProfile(groupDetail.people);
      getAllGroupChat(groupDetail.entityId);
    }
    return () => {
      dispatch({
        type: CLEAR_CHAT_DATA,
      });
    };
  }, []);

  useEffect(() => {
    socket.on("newChat", (data) => {
      const chatData = JSON.parse(data);
      dispatch({
        type: SET_CHAT_DATA,
        payload: [chatData],
      });
    });
    return () => {
      socket.off("newChat");
    };
  }, []);
  if (JSON.stringify(groupDetail) === "{}") {
    return (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "& img": {
            width: "80%",
            maxWidth: 350,
            objectFit: "contain",
          },
        }}
      >
        <img src={Chat1} alt="Chat" />
        <Typography
          sx={{
            color: theme.color.white.primary,
            fontStyle: "italic",
            textAlign: "center",
            opacity: 0.8,
          }}
        >
          Select group to start chatting.
        </Typography>
      </Box>
    );
  }

  const handleDetailActive = () => {
    setDetailActive((prev) => !prev);
  };
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      <Header
        detailActive={detailActive}
        handleDetailActive={handleDetailActive}
      />
      {detailActive ? (
        <Detail />
      ) : (
        <>
          <ChatWindow />
          <InputBox />
        </>
      )}
    </Box>
  );
};

export default Chat;
