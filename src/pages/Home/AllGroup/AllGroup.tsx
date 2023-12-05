import { Box, Typography } from "@mui/material";
import Home2 from "Images/home2.svg";
import { theme } from "Utils/theme";

const AllGroup = () => {
  return (
    <Box sx={{ flex: 1 }}>
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
    </Box>
  );
};

export default AllGroup;
