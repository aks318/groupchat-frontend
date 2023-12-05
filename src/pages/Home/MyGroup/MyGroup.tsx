import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DialogBox from "Layout/DialogBox/DialogBox";
import NewGroup from "./NewGroup";
import { theme } from "Utils/theme";
import { getAllmygroup } from "../utils";
import { useSelector } from "react-redux";

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
