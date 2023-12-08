import { Box, Typography } from "@mui/material";
import Header from "./Header";
import InputBox from "./InputBox";
import { useSelector } from "react-redux";
import Chat1 from "Images/chat1.svg";
import { theme } from "Utils/theme";
import { useEffect, useState } from "react";
import Detail from "./Detail/Detail";
import { getAllGroupChat, getPeopleProfile } from "./utils";

const Chat = () => {
  const { groupDetail } = useSelector((state: AppState) => state.homeReducer);
  const [detailActive, setDetailActive] = useState(false);
  useEffect(() => {
    if (JSON.stringify(groupDetail) !== "{}") {
      getPeopleProfile(groupDetail.people);
      getAllGroupChat(groupDetail.entityId);
    }
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
      {detailActive ? <Detail /> : <InputBox />}
    </Box>
  );
};

export default Chat;
