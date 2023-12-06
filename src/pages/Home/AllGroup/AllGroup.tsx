import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Home2 from "Images/home2.svg";
import { theme } from "Utils/theme";
import { getGroups } from "../utils";
import { useSelector } from "react-redux";
import GroupBox from "../GroupBox";

interface Props {
  searchValue: string;
}
const AllGroup = ({ searchValue }: Props) => {
  const { userDetails } = useSelector((state: AppState) => state.authReducer);
  const { allGroup } = useSelector((state: AppState) => state.homeReducer);
  const [groupList, setGroupList] = useState<groupDetailType[]>([]);

  useEffect(() => {
    getGroups(userDetails.entityId);
  }, []);

  useEffect(() => {
    const time = setTimeout(() => {
      if (searchValue) {
        const filterList = allGroup.filter((data) =>
          data.groupName.toLowerCase().includes(searchValue.toLowerCase())
        );
        setGroupList(filterList);
      } else setGroupList(allGroup);
    }, 300);
    return () => clearTimeout(time);
  }, [searchValue, allGroup]);

  return (
    <Box sx={{ flex: 1, overflow: "auto" }}>
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
          <img src={Home2} alt="hero" />
          <Typography
            sx={{
              color: theme.color.white.primary,
              fontStyle: "italic",
              textAlign: "center",
              opacity: 0.8,
            }}
          >
            You are not part of any group.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default AllGroup;
