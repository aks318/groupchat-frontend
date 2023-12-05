import { Box } from "@mui/material";
import { CustomButton } from "Layout/Button/Button.styles";
import DialogBox from "Layout/DialogBox/DialogBox";
import React, { useState } from "react";
import NewGroup from "./NewGroup";

const MyGroup = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  return (
    <Box>
      <CustomButton onClick={handleDialogOpen}>Add New</CustomButton>
      <DialogBox
        header="New Group"
        handleDialogClose={handleDialogClose}
        isDialogOpen={dialogOpen}
      >
        <NewGroup handleDialogClose={handleDialogClose} />
      </DialogBox>
    </Box>
  );
};

export default MyGroup;
