import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Box, Typography } from "@mui/material";
import Footer from "Component/Footer";
import useWindowSize from "hooks/useWindowSize ";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import MainRoutes from "routes/mainRoutes";
import { SET_MESSAGE } from "store/authReducer/authConstants";

function App() {
  const windowSize = useWindowSize();
  const { isLoggedIn, message } = useSelector(
    (state: AppState) => state.authReducer
  );
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    } else navigate("/");
  }, []);

  useEffect(() => {
    if (message.text && message.status) {
      toast[message.status](message.text, {
        position: "top-right",
      });
      dispatch({
        type: SET_MESSAGE,
        payload: {
          text: "",
          status: "success",
        },
      });
    }
  }, [message]);

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
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MainRoutes />
        {location.pathname !== "/" && location.pathname !== "/auth" ? (
          <Footer />
        ) : undefined}
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
