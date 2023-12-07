import React, { Fragment, useEffect, useState } from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { theme } from "Utils/theme";
import AddIcon from "@mui/icons-material/Add";
import DialogBox from "Layout/DialogBox/DialogBox";
import AddPeople from "./AddPeople";
import { useSelector } from "react-redux";
import Searchbar from "Component/Searchbar";

const Detail = () => {
  const { groupDetail } = useSelector((state: AppState) => state.homeReducer);
  const { userDetails } = useSelector((state: AppState) => state.authReducer);
  const { peopleProfile } = useSelector((state: AppState) => state.chatReducer);

  const [userList, setUserList] = useState<userDetailsType[]>([]);
  const [searchText, setSearchText] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (searchText) {
      const filterData = peopleProfile.filter((data) =>
        data.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setUserList(filterData);
    } else setUserList(peopleProfile);
  }, [searchText, peopleProfile]);

  const handleDialog = () => {
    setDialogOpen((prev) => !prev);
  };
  return (
    <Box
      sx={{
        p: 1.5,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflow: "auto",
      }}
    >
      <Searchbar
        placeholder="Search..."
        value={searchText}
        handleChange={(data) => setSearchText(data)}
      />
      {userList.length ? (
        <Box sx={{ flex: 1, overflow: "auto" }}>
          {userList.map((data) => (
            <Fragment key={data.entityId}>
              <Box
                sx={{
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Box
                  sx={{
                    height: 50,
                    width: 50,
                    borderRadius: "50%",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: theme.color.blue.tertiary,
                    overflow: "hidden",
                    "& img": {
                      width: "100%",
                      objectFit: "contain",
                    },
                  }}
                >
                  <img
                    src={require(`Images/Avatar/avatar${data.avatarId}.svg`)}
                    alt="avatar"
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: theme.color.white.primary,
                      opacity: 0.9,
                      fontSize: 15,
                      lineHeight: 1,
                      textTransform: "capitalize",
                    }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.color.white.primary,
                      opacity: 0.8,
                      fontSize: 13,
                      lineHeight: 1,
                    }}
                  >
                    {data.username}
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
        <Box></Box>
      )}
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
