import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export const navLinklist = [
  {
    id: 1,
    text: "Home",
    compoent: <HomeOutlinedIcon />,
    route: "/home",
  },
  {
    id: 2,
    text: "Chat",
    compoent: <ForumOutlinedIcon />,
    route: "/chat",
  },
  {
    id: 3,
    text: "Profile",
    compoent: <PersonOutlinedIcon />,
    route: "/profile",
  },
  {
    id: 4,
    text: "Logout",
    compoent: <LogoutOutlinedIcon />,
  },
];
