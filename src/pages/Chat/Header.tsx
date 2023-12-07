import { Box, IconButton, Typography } from "@mui/material";
import { theme } from "Utils/theme";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
  detailActive: boolean;
  handleDetailActive: () => void;
}
const Header = ({ detailActive, handleDetailActive }: Props) => {
  const { groupDetail } = useSelector((state: AppState) => state.homeReducer);
  return (
    <Box
      sx={{
        p: 1,
        backgroundColor: theme.bg.blue.tertiary,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        onClick={handleDetailActive}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          ml: detailActive ? 0 : "-24px",
          transition: "all 0.2s ease-in",
        }}
      >
        <IconButton
          sx={{
            p: 0.5,
            backgroundColor: `${theme.bg.blue.primary} !important`,
            opacity: detailActive ? 1 : 0,
            transition: "all 0.2s ease-in",
          }}
        >
          <ArrowBackIcon sx={{ color: "#fff" }} />
        </IconButton>
        <Typography sx={{ color: theme.color.white.primary, fontWeight: 600 }}>
          {groupDetail.groupName}
        </Typography>
      </Box>
      {/* <IconButton>
        <MoreVertIcon sx={{ color: "#fff" }} />
      </IconButton> */}
    </Box>
  );
};

export default Header;
