import { Box, Typography } from "@mui/material";
import Footer from "Component/Footer";
import useWindowSize from "hooks/useWindowSize ";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import MainRoutes from "routes/mainRoutes";

function App() {
  const windowSize = useWindowSize();
  const { isLoggedIn } = useSelector((state: AppState) => state.authReducer);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    } else navigate("/");
  }, []);

  if (windowSize.width > 600) {
    return (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: 20, fontWeight: 600 }}>
          Your device viewport is more than 600px.
          <br /> Please Use smaller device to use this application.
        </Typography>
      </Box>
    );
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainRoutes />
      {location.pathname !== "/" && location.pathname !== "/auth" ? (
        <Footer />
      ) : undefined}
    </Suspense>
  );
}

export default App;
