import { theme } from "Utils/theme";
import { InputProps, TextField } from "@mui/material";
import styled from "styled-components";

export const CustomTextInput = styled(TextField).attrs(({ sx }) => ({
  sx,
  size: "small",
}))<InputProps>`
  .MuiOutlinedInput-root,
  .Mui-disabled {
    color: ${theme.color.white.primary} !important;
    -webkit-text-fill-color: ${theme.color.white.primary} !important;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${theme.border.white.primary} !important;
  }
  .MuiInputLabel-root {
    color: ${theme.color.white.primary} !important;
  }
  .Mui-focused fieldset {
    border-color: ${theme.border.white.primary} !important;
  }
  .Mui-disabled {
    opacity: 0.8;
  }
`;
