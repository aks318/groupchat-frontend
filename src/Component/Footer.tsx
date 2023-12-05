import { Box } from "@mui/material";
import { clearStore } from "Utils/clearStore";
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
      const text = "Are you sure wants to logout?";
      if (window.confirm(text) === true) {
        clearStore();
        navigate("/");
      }
    }
  };

  return (
    <Box sx={{ backgroundColor: theme.bg.blue.secondary, display: "flex" }}>
      {navLinklist.map((data) => (
        <Box
          key={data.id}
          sx={{
            flex: 1,
            py: 0.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              pathname === data.route ? theme.bg.blue.tertiary : "",
            "& svg": {
              fontSize: pathname === data.route ? "28px" : "24px",
            },
            transition: "all 0.2s ease-in",
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
