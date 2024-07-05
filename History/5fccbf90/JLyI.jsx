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
import Private from "./components/Private";

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
        element: (
          <Private>
            <AddFoods></AddFoods>
          </Private>
        ),
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
        loader: ({ params }) =>
          fetch(`http://localhost:4000/products/${params.brandName}`),
      },
      {
        path: "/availale",
        element: <AvailableFood></AvailableFood>,
      },
    ],
  },
]);

export default router;
