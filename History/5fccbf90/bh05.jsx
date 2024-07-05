import { createBrowserRouter } from "react-router-dom";

import Home from "./Home/Home";
import Root from "./Root";
import SignIn from "./SignIn";
import AddFoods from "./components/AddFoods";
import MyFoods from "./components/MyFoods";
import MyRequest from "./components/MyRequest";
import SignUp from "./components/SignUp";

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
        path: "/registration",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/addFoods",
        element: <AddFoods></AddFoods>,
      },
      {
        path: "/myFoods",
        element: <MyFoods></MyFoods>,
      },
      {
        path: "/myReqFood",
        element: <MyRequest></MyRequest>,
      },
    ],
  },
]);

export default router;
