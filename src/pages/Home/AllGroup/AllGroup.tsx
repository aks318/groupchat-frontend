import { Box, Divider, Typography } from "@mui/material";
import Home2 from "Images/home2.svg";
import { theme } from "Utils/theme";
import { Fragment, useEffect, useState } from "react";
import { getGroups } from "../utils";
import { useSelector } from "react-redux";
import moment from "moment";

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
                      : `You, ${grp.people.length - 1} more people`}
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
        </>
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
