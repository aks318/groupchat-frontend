import { Box, Divider, Typography } from "@mui/material";
import { theme } from "Utils/theme";
import moment from "moment";
import React, { Fragment } from "react";

interface Props {
  grp: groupDetailType;
}
const GroupBox = ({ grp }: Props) => {
  return (
    <Fragment>
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
  );
};

export default GroupBox;
