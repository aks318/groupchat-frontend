import { Box } from "@mui/material";
import React from "react";
import Tab from "./Tab";
import { useSelector } from "react-redux";
import MyGroup from "./MyGroup/MyGroup";
import AllGroup from "./AllGroup/AllGroup";

const Home = () => {
  const { tab } = useSelector((state: AppState) => state.homeReducer);
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      <Tab />
      {tab === "My group" ? <MyGroup /> : <AllGroup />}
    </Box>
  );
};

export default Home;
