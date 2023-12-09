import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { CustomTextInput } from "Layout/TextInput/TextInput.styles";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { theme } from "Utils/theme";
import { sendChat } from "./utils";
import { useSelector } from "react-redux";

const InputBox = () => {
  const { userDetails } = useSelector((state: AppState) => state.authReducer);
  const { groupDetail } = useSelector((state: AppState) => state.homeReducer);

  const [chat, setChat] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendChat = async () => {
    const entityIdList = groupDetail.people.filter(
      (entityId) => entityId !== userDetails.entityId
    );
    setLoading(true);
    await sendChat(
      groupDetail.entityId,
      userDetails.entityId,
      chat,
      entityIdList
    );
    setLoading(false);
    setChat("");
  };

  return (
    <CustomTextInput
      name="chat"
      placeholder="Type here..."
      value={chat}
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
      onChange={(e) => setChat(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {loading ? (
              <CircularProgress sx={{ color: theme.color.white.primary }} />
            ) : (
              <IconButton onClick={handleSendChat}>
                <SendOutlinedIcon sx={{ color: theme.color.white.primary }} />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputBox;
