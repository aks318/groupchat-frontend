import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton, Typography } from "@mui/material";

import DialogBox from "Layout/DialogBox/DialogBox";
import Home1 from "Images/home1.svg";

import { theme } from "Utils/theme";
import NewGroup from "./NewGroup";
import GroupBox from "../GroupBox";

interface Props {
  searchValue: string;
}
const MyGroup = ({ searchValue }: Props) => {
  const { userDetails } = useSelector((state: AppState) => state.authReducer);
  const { myAllGroup } = useSelector((state: AppState) => state.homeReducer);
  const [groupList, setGroupList] = useState<groupDetailType[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (searchValue) {
      const filterList = myAllGroup.filter((data) =>
        data.groupName.toLowerCase().includes(searchValue.toLowerCase())
      );
      setGroupList(filterList);
    } else setGroupList(myAllGroup);
  }, [searchValue, myAllGroup]);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  return (
    <Box sx={{ flex: 1, position: "relative", overflow: "auto" }}>
      {groupList.length ? (
        <>
          {groupList.map((grp) => (
            <GroupBox key={grp.entityId} grp={grp} />
          ))}
        </>
      ) : (
        <Box
          sx={{
            height: "100%",
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
      )}
      <IconButton
        onClick={handleDialogOpen}
        sx={{
          backgroundColor: `${theme.bg.blue.tertiary} !important`,
          position: "fixed",
          bottom: "72px",
          right: "28px",
        }}
      >
        <AddIcon fontSize="large" sx={{ color: theme.color.white.primary }} />
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
