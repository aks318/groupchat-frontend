import React from "react";
import { CustomTextInput } from "Layout/TextInput/TextInput.styles";
import { IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "Utils/theme";

interface Props {
  placeholder: string;
  value: string;
  handleChange: (value: string) => void;
}
const Searchbar = ({ placeholder, value, handleChange }: Props) => {
  return (
    <CustomTextInput
      name="search"
      value={value}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-root": {
          borderRadius: "30px",
          height: 32,
          fontSize: 14,
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {value ? (
              <IconButton sx={{ p: 0 }} onClick={() => handleChange("")}>
                <CloseIcon sx={{ color: theme.color.white.primary }} />
              </IconButton>
            ) : (
              <SearchIcon sx={{ color: theme.color.white.primary }} />
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Searchbar;
