import { Box, List, ListItem, Typography } from "@mui/material";
import { theme } from "Utils/theme";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HOME_SET_TAB } from "store/homeReducer/homeConstants";

const Tab = () => {
  const { tab } = useSelector((state: AppState) => state.homeReducer);
  const dispatch = useDispatch();

  const handleSwitch = (tab: "My group" | "All group") => {
    dispatch({
      type: HOME_SET_TAB,
      payload: tab,
    });
  };
  return (
    <Box>
      <List
        sx={{
          p: 0,
          display: "flex",
          backgroundColor: theme.bg.blue.secondary,
          "& .MuiListItem-root": {
            cursor: "pointer",
            transition: "all 0.2s ease-in",
          },
        }}
      >
        <ListItem
          sx={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: tab === "My group" ? theme.bg.blue.tertiary : "",
          }}
          onClick={() => handleSwitch("My group")}
        >
          <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
            My Group
          </Typography>
        </ListItem>
        <ListItem
          sx={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: tab === "All group" ? theme.bg.blue.tertiary : "",
          }}
          onClick={() => handleSwitch("All group")}
        >
          <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
            All Group
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default Tab;
