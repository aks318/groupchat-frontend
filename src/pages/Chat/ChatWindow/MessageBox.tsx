import { Box, Typography } from "@mui/material";
import { theme } from "Utils/theme";
import React from "react";
import { useSelector } from "react-redux";

interface Props {
  data: chatDataType;
  profileInfo: userDetailsType;
}
const MessageBox = ({ data, profileInfo }: Props) => {
  const { userDetails } = useSelector((state: AppState) => state.authReducer);
  return (
    <Box
      sx={{ ml: userDetails.entityId === profileInfo.entityId ? "auto" : "" }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Box
          sx={{
            backgroundColor: theme.bg.blue.tertiary,
            p: 1,
            borderRadius: "25px",
            maxWidth: 250,
          }}
        >
          <Typography sx={{ fontSize: 16 }}>{data.chat}</Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: 12,
          color: theme.color.white.secondary,
          textAlign:
            userDetails.entityId === profileInfo.entityId ? "right" : "left",
        }}
      >
        {profileInfo.name}
      </Typography>
    </Box>
  );
};

export default MessageBox;
