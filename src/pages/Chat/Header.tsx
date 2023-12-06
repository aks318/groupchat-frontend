import { Box, IconButton, Typography } from "@mui/material";
import { theme } from "Utils/theme";
import { useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Header = () => {
  const { groupDetail } = useSelector((state: AppState) => state.homeReducer);
  return (
    <Box
      sx={{
        pl: 1,
        backgroundColor: theme.bg.blue.tertiary,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ color: theme.color.white.primary, fontWeight: 600 }}>
        {groupDetail.groupName}
      </Typography>
      <IconButton>
        <MoreVertIcon sx={{ color: "#fff" }} />
      </IconButton>
    </Box>
  );
};

export default Header;
