import React, { Fragment } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { theme } from "Utils/theme";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HOME_SET_GROUP_DETAIL } from "store/homeReducer/homeConstants";

interface Props {
  grp: groupDetailType;
}
const GroupBox = ({ grp }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGrpClick = (grpDetail: groupDetailType) => {
    dispatch({
      type: HOME_SET_GROUP_DETAIL,
      payload: grpDetail,
    });
    navigate("/chat");
  };

  return (
    <Fragment>
      <Box
        sx={{
          px: 2,
          py: 1.5,
          "&:active": {
            scale: "0.9",
            opacity: 0.9,
          },
          transition: "all 0.3s ease-in",
        }}
        onClick={() => handleGrpClick(grp)}
      >
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
  );
};

export default GroupBox;
