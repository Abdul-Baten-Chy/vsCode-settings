import { createBrowserRouter } from "react-router-dom";

import Home from "./Home/Home";
import Registration from "./Registration";
import Root from "./Root";
import SignIn from "./SignIn";
import AddFoods from "./components/AddFoods";
import AvailableFood from "./components/AvailableFood";
import Deatils from "./components/Deatils";
import MyFoods from "./components/MyFoods";
import MyRequest from "./components/MyRequest";

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
        element: <Registration></Registration>,
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
      {
        path: "/details",
        element: <Deatils></Deatils>,
      },
      {
        path: "/availale",
        element: <AvailableFood></AvailableFood>,
      },
    ],
  },
]);

export default router;
