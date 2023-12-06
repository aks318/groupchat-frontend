import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { theme } from "Utils/theme";
import { useSelector } from "react-redux";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { CustomButton } from "Layout/Button/Button.styles";
import DialogBox from "Layout/DialogBox/DialogBox";
import Details from "./Details";
import Avatars from "./Avatars";

const Profile = () => {
  const { userDetails } = useSelector((state: AppState) => state.authReducer);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [avatarDialogOpen, setAvatarDialogOpen] = useState(false);

  const handleDetailDialog = () => setDetailDialogOpen((prev) => !prev);
  const handleAvatarDialog = () => setAvatarDialogOpen((prev) => !prev);

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
          gap: 1,
          pt: 3,
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: 120,
              height: 120,
              position: "relative",
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
          <IconButton
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              backgroundColor: `${theme.bg.blue.tertiary} !important`,
              p: 0.5,
            }}
            onClick={handleAvatarDialog}
          >
            <EditOutlinedIcon sx={{ color: theme.color.white.primary }} />
          </IconButton>
        </Box>
        <Box>
          <Typography
            sx={{
              color: theme.color.white.primary,
              textTransform: "capitalize",
              opacity: 0.8,
              textAlign: "center",
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
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            {userDetails.username}
          </Typography>
        </Box>
        <CustomButton
          variant="contained"
          sx={{ width: "90%", maxWidth: 300, textTransform: "capitalize" }}
          onClick={handleDetailDialog}
        >
          Change Details
        </CustomButton>
      </Box>
      <DialogBox
        header="Change Details"
        isDialogOpen={detailDialogOpen}
        handleDialogClose={handleDetailDialog}
      >
        <Details
          userDetails={userDetails}
          handleDialogClose={handleDetailDialog}
        />
      </DialogBox>
      <DialogBox
        header="Change Avatar"
        isDialogOpen={avatarDialogOpen}
        handleDialogClose={handleAvatarDialog}
      >
        <Avatars />
      </DialogBox>
    </Box>
  );
};

export default Profile;
