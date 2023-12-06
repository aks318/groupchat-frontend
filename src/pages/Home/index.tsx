import { Box } from "@mui/material";
import React, { useState } from "react";
import Tab from "./Tab";
import { useDispatch, useSelector } from "react-redux";
import MyGroup from "./MyGroup/MyGroup";
import AllGroup from "./AllGroup/AllGroup";
import Searchbar from "Component/Searchbar";
import { HOME_SET_TAB } from "store/homeReducer/homeConstants";

const Home = () => {
  const { tab } = useSelector((state: AppState) => state.homeReducer);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleSwitch = (newtab: "My group" | "All group") => {
    dispatch({
      type: HOME_SET_TAB,
      payload: newtab,
    });
    setSearchValue("");
  };
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      <Tab handleSwitch={handleSwitch} />
      <Searchbar
        placeholder="Search Group"
        value={searchValue}
        handleChange={handleChange}
      />
      {tab === "My group" ? <MyGroup /> : <AllGroup />}
    </Box>
  );
};

export default Home;
