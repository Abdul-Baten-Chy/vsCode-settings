import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signIn",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
