import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

// Pages
const Landing = lazy(() => import("pages/Landing"));
const Auth = lazy(() => import("pages/Auth"));
const Home = lazy(() => import("pages/Home"));
const Chat = lazy(() => import("pages/Chat"));
const Profile = lazy(() => import("pages/Profile"));

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
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
];

export default routes;
