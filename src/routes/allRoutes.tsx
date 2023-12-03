import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

// Pages
const Home = lazy(() => import("pages/Home"));
const Auth = lazy(() => import("pages/Auth"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "auth",
    element: <Auth />,
  },
];

export default routes;
