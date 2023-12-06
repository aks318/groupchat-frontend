import { IconButton, InputAdornment } from "@mui/material";
import { CustomTextInput } from "Layout/TextInput/TextInput.styles";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { theme } from "Utils/theme";

const InputBox = () => {
  return (
    <CustomTextInput
      name="chat"
      placeholder="Type here..."
      sx={{
        m: 1,
        mt: "auto",
        "& .MuiOutlinedInput-root": {
          borderRadius: "30px",
          height: 32,
          fontSize: 14,
          pr: 0,
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SendOutlinedIcon sx={{ color: theme.color.white.primary }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputBox;
