import { Box, Grid } from "@mui/material";
import { CustomButton } from "Layout/Button/Button.styles";
import { Avatardata } from "Utils/Avatardata";
import { theme } from "Utils/theme";
import { useState } from "react";
import { changeAvatar } from "./utils";

interface Props {
  userDetails: userDetailsType;
  handleDialogClose: () => void;
}
const Avatars = ({ userDetails, handleDialogClose }: Props) => {
  const [selectedId, setSelectedId] = useState(userDetails.avatarId);

  const handleChange = async () => {
    await changeAvatar(selectedId, userDetails.entityId);
    handleDialogClose();
  };

  return (
    <Box sx={{ mt: 1.5 }}>
      <Grid container spacing={1.5}>
        {Avatardata.map((data) => (
          <Grid
            key={data.id}
            item
            xs={3}
            onClick={() => setSelectedId(data.id)}
          >
            <Box
              sx={{
                border: `${selectedId === data.id ? "3px" : "1px"} solid ${
                  theme.bg.blue.primary
                }`,
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img src={data.image} alt="avatar" />
            </Box>
          </Grid>
        ))}
      </Grid>

      <CustomButton
        variant="contained"
        onClick={handleChange}
        sx={{ width: "100%", mt: 2 }}
      >
        Change
      </CustomButton>
    </Box>
  );
};

export default Avatars;
