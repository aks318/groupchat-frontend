import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "Layout/Button/Button.styles";
import { CustomTextInput } from "Layout/TextInput/TextInput.styles";
import { theme } from "Utils/theme";
import Styles from "styles/auth.module.scss";
import API from "Utils/intercepter";
import { useDispatch } from "react-redux";
import {
  SET_AUTH_TOKEN,
  SET_LOGGED_IN,
  SET_USER_DETAILS,
} from "store/authReducer/authConstants";

interface Props {
  handleSwitch: () => void;
}

type FormDataType = {
  username: string;
  password: string;
};

const Login = ({ handleSwitch }: Props) => {
  const [formData, setFormData] = useState<FormDataType>({} as FormDataType);
  const dispatch = useDispatch();

  const handleChange = (key: keyof FormDataType, value: string | number) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await API.post("user/login", formData);
      if (res.data.success) {
        dispatch({
          type: SET_AUTH_TOKEN,
          payload: res.data.data.token,
        });
        dispatch({
          type: SET_LOGGED_IN,
          payload: true,
        });
        dispatch({
          type: SET_USER_DETAILS,
          payload: res.data.data.userData,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box className={Styles.authContainer}>
      <form onSubmit={handleSubmit}>
        <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
          Login
        </Typography>
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
          sx={{ width: "100%" }}
          inputProps={{
            minLength: 5,
            maxLength: 10,
          }}
          required
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <CustomButton variant="contained" type="submit">
          Submit
        </CustomButton>
      </form>
      <Typography sx={{ mt: 1, textAlign: "center", fontSize: 14 }}>
        Not have an account?{" "}
        <span
          style={{ color: theme.color.blue.tertiary, cursor: "pointer" }}
          onClick={handleSwitch}
        >
          Register
        </span>
      </Typography>
    </Box>
  );
};

export default Login;
