import Footer from "Component/Footer";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import MainRoutes from "routes/mainRoutes";

function App() {
  const { isLoggedIn } = useSelector((state: AppState) => state.authReducer);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    } else navigate("/");
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainRoutes />
      {location.pathname !== "/" ? <Footer /> : undefined}
    </Suspense>
  );
}

export default App;
