import React from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "Layout/Button/Button.styles";
import { CustomTextInput } from "Layout/TextInput/TextInput.styles";
import { theme } from "Utils/theme";
import Styles from "styles/auth.module.scss";

interface Props {
  handleSwitch: () => void;
}
const Register = ({ handleSwitch }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Box className={Styles.authContainer}>
      <form onSubmit={handleSubmit}>
        <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
          Register
        </Typography>
        <CustomTextInput
          name="username"
          label="Username"
          placeholder="Username"
          sx={{ width: "100%" }}
          required
        />
        <CustomTextInput
          name="password"
          label="Password"
          placeholder="Password"
          sx={{ width: "100%" }}
          required
        />
        <CustomTextInput
          name="cpassword"
          label="Confirm Password"
          placeholder="Confirm Password"
          sx={{ width: "100%" }}
          required
        />
        <CustomButton variant="contained" type="submit">
          Submit
        </CustomButton>
      </form>
      <Typography sx={{ mt: 1, textAlign: "center", fontSize: 14 }}>
        Already have an account?{" "}
        <span
          style={{ color: theme.color.blue.tertiary }}
          onClick={handleSwitch}
        >
          Login
        </span>
      </Typography>
    </Box>
  );
};

export default Register;
