import { theme } from "Utils/theme";
import { Button, ButtonProps } from "@mui/material";
import styled from "styled-components";

interface CustomButtonProps extends ButtonProps {}

export const CustomButton = styled(Button).attrs(({ sx }) => ({
  sx,
}))<CustomButtonProps>`
  color: ${({ variant }: CustomButtonProps) =>
    variant === "contained"
      ? theme.color.white.primary
      : theme.color.blue.tertiary} !important;
  background-color: ${({ variant }: CustomButtonProps) =>
    variant === "contained" ? theme.bg.blue.secondary : ""} !important;
  border-radius: 4px;
  border-color: ${theme.bg.white.primary} !important;
  &:hover {
    color: ${theme.color.white.primary} !important;
    background-color: ${theme.bg.blue.tertiary} !important;
    transition: all 0.3s ease-in;
  }
  &:disabled {
    background-color: ${theme.color.grey.primary} !important;
    scale: 0.9;
    transition: all 0.3s ease-in;
  }
`;
