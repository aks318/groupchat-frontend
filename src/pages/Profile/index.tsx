import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "Utils/theme";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userDetails } = useSelector((state: AppState) => state.authReducer);
  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          p: 1,
          backgroundColor: theme.bg.blue.tertiary,
        }}
      >
        <Typography sx={{ color: theme.color.white.primary, fontWeight: 600 }}>
          Profile
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 3,
        }}
      >
        <Box
          sx={{
            width: 120,
            height: 120,
            overflow: "hidden",
            borderRadius: "50%",
            border: `3px solid ${theme.color.blue.tertiary}`,
            "& img": {
              width: "100%",
              objectFit: "contain",
            },
          }}
        >
          <img
            src={require(`Images/Avatar/avatar${userDetails.avatarId}.svg`)}
            alt="avatar"
          />
        </Box>
        <Typography
          sx={{
            color: theme.color.white.primary,
            textTransform: "capitalize",
            opacity: 0.8,
            lineHeight: 1,
            mt: 0.4,
          }}
        >
          {userDetails.name}
        </Typography>
        <Typography
          sx={{
            color: theme.color.white.primary,
            opacity: 0.9,
            fontSize: 14,
            lineHeight: 1,
          }}
        >
          {userDetails.username}
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
