import { useRoutes } from "react-router-dom";
import routes from "./allRoutes";

const MainRoutes = () => {
  const allRoutes = useRoutes(routes);
  return allRoutes;
};

export default MainRoutes;
