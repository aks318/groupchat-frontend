import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "Utils/theme";

interface Props {
  children: JSX.Element;
  header?: string;
  isDialogOpen: boolean;
  handleDialogClose: () => void;
}
const DialogBox = ({
  children,
  header,
  isDialogOpen,
  handleDialogClose,
}: Props) => {
  return (
    <Dialog
      open={isDialogOpen}
      onClose={handleDialogClose}
      sx={{
        "& .MuiDialogContent-root": {
          padding: 1.5,
        },
      }}
      PaperProps={{
        sx: {
          minWidth: "300px",
          maxWidth: "550px",
          backgroundColor: theme.bg.blue.tertiary,
        },
      }}
    >
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pl: 1,
          }}
        >
          <Typography
            sx={{
              color: theme.color.white.primary,
              fontSize: {
                xs: "18px",
                sm: "22px",
              },
            }}
          >
            {header}
          </Typography>
          <IconButton onClick={handleDialogClose}>
            <CloseIcon sx={{ color: theme.color.white.primary }} />
          </IconButton>
        </Box>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
