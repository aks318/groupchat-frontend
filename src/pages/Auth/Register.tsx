import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "Layout/Button/Button.styles";
import { CustomTextInput } from "Layout/TextInput/TextInput.styles";
import { theme } from "Utils/theme";
import Styles from "styles/auth.module.scss";

interface Props {
  handleSwitch: () => void;
}
type FormDataType = {
  name: string;
  avatarId: number;
  username: string;
  password: string;
  confirmPassword?: string;
};
const Register = ({ handleSwitch }: Props) => {
  const [formData, setFormData] = useState<FormDataType>({} as FormDataType);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password fields do not matches!");
    } else {
      console.log(formData);
    }
  };

  const handleChange = (key: keyof FormDataType, value: string | number) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Box className={Styles.authContainer}>
      <form onSubmit={handleSubmit}>
        <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
          Register
        </Typography>
        <CustomTextInput
          name="name"
          label="Name"
          placeholder="Name"
          sx={{ width: "100%" }}
          inputProps={{
            minLength: 5,
            maxLength: 15,
          }}
          required
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <CustomTextInput
          name="username"
          label="Username"
          placeholder="Username"
          sx={{ width: "100%" }}
          inputProps={{
            minLength: 5,
            maxLength: 10,
          }}
          required
          onChange={(e) => handleChange("username", e.target.value)}
        />
        <CustomTextInput
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
          sx={{ width: "100%" }}
          inputProps={{
            minLength: 5,
            maxLength: 15,
          }}
          required
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <CustomTextInput
          name="cpassword"
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          sx={{ width: "100%" }}
          inputProps={{
            minLength: 5,
            maxLength: 15,
          }}
          required
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
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
