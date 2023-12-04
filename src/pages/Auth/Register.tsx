import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "Layout/Button/Button.styles";
import { CustomTextInput } from "Layout/TextInput/TextInput.styles";
import { theme } from "Utils/theme";
import Styles from "styles/auth.module.scss";
import API from "Utils/intercepter";
import {
  SET_AUTH_TOKEN,
  SET_LOGGED_IN,
  SET_USER_DETAILS,
} from "store/authReducer/authConstants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  const [formData, setFormData] = useState<FormDataType>({
    avatarId: 1,
  } as FormDataType);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password fields do not matches!");
    } else {
      try {
        const res = await API.post("/user/register", formData);
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
          navigate("/home");
        }
      } catch (error) {
        console.log(error);
      }
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
          style={{ color: theme.color.blue.tertiary, cursor: "pointer" }}
          onClick={handleSwitch}
        >
          Login
        </span>
      </Typography>
    </Box>
  );
};

export default Register;
