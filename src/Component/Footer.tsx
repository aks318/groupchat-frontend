import { Box } from "@mui/material";
import { navLinklist } from "Utils/navLinks";
import { theme } from "Utils/theme";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (route: string | undefined) => {
    if (route) {
      navigate(route);
    } else {
      // Handle logout
    }
  };

  return (
    <Box sx={{ backgroundColor: theme.bg.blue.secondary, display: "flex" }}>
      {navLinklist.map((data) => (
        <Box
          key={data.id}
          sx={{
            flex: 1,
            py: 1,
            textAlign: "center",
            backgroundColor:
              pathname === data.route ? theme.bg.blue.tertiary : "",
          }}
          onClick={() => handleNavigate(data.route)}
        >
          {data.compoent}
        </Box>
      ))}
    </Box>
  );
};

export default Footer;
