import { Box } from "@mui/material";
import { clearStore } from "Utils/clearStore";
import { navLinklist } from "Utils/navLinks";
import { theme } from "Utils/theme";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { socket } from "socket";
import { HOME_SET_ALL_GROUP } from "store/homeReducer/homeConstants";

const Footer = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    socket.on("newGroup", (data) => {
      const groupData = JSON.parse(data);
      console.log(groupData);
      dispatch({
        type: HOME_SET_ALL_GROUP,
        payload: [groupData],
      });
    });
    return () => {
      socket.off("newGroup");
    };
  }, []);

  return (
    <Box sx={{ backgroundColor: theme.bg.blue.secondary, display: "flex" }}>
      {navLinklist.map((data) => (
        <Box
          key={data.id}
          sx={{
            flex: 1,
            py: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              pathname === data.route ? theme.bg.blue.tertiary : "",
            "& svg": {
              fontSize: pathname === data.route ? "32px" : "28px",
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
