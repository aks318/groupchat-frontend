import { Box, Typography } from "@mui/material";
import Hero from "Images/hero.svg";
import { CustomButton } from "Layout/Button/Button.styles";
import { theme } from "Utils/theme";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const handleButtonClick = (isSignIn: boolean) => {
    navigate("/auth", { state: { isSignIn } });
  };
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 3.5,
        px: 2,
        gap: "16px",
        "& img": {
          width: "70%",
          maxWidth: 350,
          objectFit: "contain",
        },
      }}
    >
      <Typography
        sx={{
          color: theme.color.blue.tertiary,
          fontSize: 28,
          fontWeight: 600,
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        <span style={{ color: theme.color.white.primary }}>Live, </span>
        Group Chat
        <br />
        Application
      </Typography>
      <img src={Hero} alt="hero" />
      <Typography
        sx={{
          fontSize: 14,
          color: theme.color.white.primary,
          textAlign: "center",
        }}
      >
        Welcome to our live group chat application! Connect with friends,
        family, or colleagues in real-time, no matter where they are, enjoy the
        seamless communication on our group chat app.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
        }}
      >
        <CustomButton
          variant="outlined"
          sx={{ width: 300, textTransform: "capitalize" }}
          onClick={() => handleButtonClick(false)}
        >
          Create New Account
        </CustomButton>
        <Typography sx={{ fontSize: 12, lineHeight: 1 }}>Or</Typography>
        <CustomButton
          variant="contained"
          sx={{ width: 300, textTransform: "capitalize" }}
          onClick={() => handleButtonClick(true)}
        >
          Sign In
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Landing;
