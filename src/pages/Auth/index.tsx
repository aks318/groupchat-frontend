import React, { useState } from "react";
import { Box } from "@mui/material";
import Styles from "styles/auth.module.scss";
import Login from "./Login";
import Register from "./Register";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const { isSignIn } = location.state as { isSignIn: boolean };
  const [isLogin, setIsLogin] = useState<boolean>(isSignIn);
  const handleSwitch = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <Box className={Styles.auth}>
      {isLogin ? (
        <Login handleSwitch={handleSwitch} />
      ) : (
        <Register handleSwitch={handleSwitch} />
      )}
    </Box>
  );
};

export default Auth;
