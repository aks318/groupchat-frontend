import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { Box, Divider, IconButton, Typography } from "@mui/material";

import DialogBox from "Layout/DialogBox/DialogBox";
import Home1 from "Images/home1.svg";

import { theme } from "Utils/theme";
import { getAllmygroup } from "../utils";
import NewGroup from "./NewGroup";
import moment from "moment";

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
    <Box sx={{ flex: 1, position: "relative", overflow: "auto" }}>
      {myAllGroup.length ? (
        <Box>
          {myAllGroup.map((grp) => (
            <Fragment key={grp.entityId}>
              <Box sx={{ px: 2, py: 1.5 }}>
                <Typography
                  sx={{
                    color: theme.color.white.primary,
                    fontWeight: 600,
                    opacity: 0.9,
                    textTransform: "capitalize",
                  }}
                >
                  {grp.groupName}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.color.white.primary,
                      fontSize: 11,
                      opacity: 0.7,
                    }}
                  >
                    {grp.people.length === 1
                      ? "Add people"
                      : `You, ${grp.people.length - 1} people`}
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.color.white.primary,
                      fontSize: 11,
                      opacity: 0.6,
                      textTransform: "capitalize",
                    }}
                  >
                    Created At: {moment(grp.createdDate).format("DD-MM-YYYY")}
                  </Typography>
                </Box>
              </Box>
              <Divider
                sx={{
                  borderColor: theme.color.white.primary,
                  opacity: 0.2,
                }}
              />
            </Fragment>
          ))}
        </Box>
      ) : (
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
      )}
      <IconButton
        onClick={handleDialogOpen}
        sx={{
          backgroundColor: `${theme.bg.blue.tertiary} !important`,
          position: "fixed",
          bottom: "54px",
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
