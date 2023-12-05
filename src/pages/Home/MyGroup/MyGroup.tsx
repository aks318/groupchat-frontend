import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton, Typography } from "@mui/material";

import DialogBox from "Layout/DialogBox/DialogBox";
import Home1 from "Images/home1.svg";

import { theme } from "Utils/theme";
import { getAllmygroup } from "../utils";
import NewGroup from "./NewGroup";

const MyGroup = () => {
  const { userDetails } = useSelector((state: AppState) => state.authReducer);
  const { myAllGroup } = useSelector((state: AppState) => state.homeReducer);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (!myAllGroup.length) getAllmygroup(userDetails.entityId);
  }, []);
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  return (
    <Box sx={{ flex: 1, position: "relative" }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={Home1} alt="hero" />
        <Typography
          sx={{
            color: theme.color.white.primary,
            fontStyle: "italic",
            textAlign: "center",
            opacity: 0.8,
          }}
        >
          You haven't created any group yet.
        </Typography>
      </Box>
      <IconButton
        onClick={handleDialogOpen}
        sx={{
          backgroundColor: `${theme.bg.blue.tertiary} !important`,
          position: "absolute",
          bottom: "24px",
          right: "16px",
        }}
      >
        <AddIcon sx={{ color: theme.color.white.primary }} />
      </IconButton>
      <DialogBox
        header="New Group"
        handleDialogClose={handleDialogClose}
        isDialogOpen={dialogOpen}
      >
        <NewGroup
          entityId={userDetails.entityId}
          handleDialogClose={handleDialogClose}
        />
      </DialogBox>
    </Box>
  );
};

export default MyGroup;
