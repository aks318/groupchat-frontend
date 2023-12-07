import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { theme } from "Utils/theme";
import AddIcon from "@mui/icons-material/Add";
import DialogBox from "Layout/DialogBox/DialogBox";
import AddPeople from "./AddPeople";
import { useSelector } from "react-redux";

const Detail = () => {
  const { groupDetail } = useSelector((state: AppState) => state.homeReducer);
  const { userDetails } = useSelector((state: AppState) => state.authReducer);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialog = () => {
    setDialogOpen((prev) => !prev);
  };
  return (
    <Box>
      {groupDetail.ownerId === userDetails.entityId ? (
        <IconButton
          onClick={handleDialog}
          sx={{
            backgroundColor: `${theme.bg.blue.tertiary} !important`,
            position: "fixed",
            bottom: "54px",
            right: "16px",
          }}
        >
          <AddIcon sx={{ color: theme.color.white.primary }} />
        </IconButton>
      ) : undefined}
      <DialogBox
        header="Add People"
        handleDialogClose={handleDialog}
        isDialogOpen={dialogOpen}
      >
        <AddPeople groupDetail={groupDetail} handleDialogClose={handleDialog} />
      </DialogBox>
    </Box>
  );
};

export default Detail;