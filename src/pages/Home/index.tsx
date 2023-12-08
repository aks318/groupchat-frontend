import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import { useDispatch, useSelector } from "react-redux";
import MyGroup from "./MyGroup/MyGroup";
import AllGroup from "./AllGroup/AllGroup";
import Searchbar from "Component/Searchbar";
import { HOME_SET_TAB } from "store/homeReducer/homeConstants";
import { getAllmygroup, getGroups } from "./utils";

const Home = () => {
  const { userDetails } = useSelector((state: AppState) => state.authReducer);
  const { tab, myAllGroup, allGroup } = useSelector(
    (state: AppState) => state.homeReducer
  );
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!myAllGroup.length) getAllmygroup(userDetails.entityId);
    if (!allGroup.length) getGroups(userDetails.entityId);
  }, []);

  const handleChange = (value: string) => {
    setSearchValue(value);
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
      <Box sx={{ m: 1 }}>
        <Searchbar
          placeholder="Search Group"
          value={searchValue}
          handleChange={handleChange}
        />
      </Box>
      {tab === "My group" ? (
        <MyGroup searchValue={searchValue} />
      ) : (
        <AllGroup searchValue={searchValue} />
      )}
    </Box>
  );
};

export default Home;
