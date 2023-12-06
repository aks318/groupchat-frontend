import { Box, Typography } from "@mui/material";
import Header from "./Header";
import InputBox from "./InputBox";
import { useSelector } from "react-redux";
import Chat1 from "Images/chat1.svg";
import { theme } from "Utils/theme";

const Chat = () => {
  const { groupDetail } = useSelector((state: AppState) => state.homeReducer);
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
  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Header />
      <InputBox />
    </Box>
  );
};

export default Chat;
