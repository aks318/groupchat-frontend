import React from "react";
import { CustomTextInput } from "Layout/TextInput/TextInput.styles";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "Utils/theme";

interface Props {
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Searchbar = ({ placeholder, value, handleChange }: Props) => {
  return (
    <CustomTextInput
      name="search"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      sx={{
        m: 1,
        "& .MuiOutlinedInput-root": {
          borderRadius: "30px",
          height: 32,
          fontSize: 14,
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{ color: theme.color.white.primary }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Searchbar;
