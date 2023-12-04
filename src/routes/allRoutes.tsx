import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

// Pages
const Landing = lazy(() => import("pages/Landing"));
const Auth = lazy(() => import("pages/Auth"));
const Home = lazy(() => import("pages/Home"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "auth",
    element: <Auth />,
  },
  {
    path: "home",
    element: <Home />,
  },
];

export default routes;
