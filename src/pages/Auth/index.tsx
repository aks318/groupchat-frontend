import React, { useState } from "react";
import { Box } from "@mui/material";
import Styles from "styles/auth.module.scss";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
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
