import { createBrowserRouter } from "react-router-dom";

import Home from "./Home/Home";
import Registration from "./Registration";
import Root from "./Root";
import SignIn from "./SignIn";
import AddFoods from "./components/AddFoods";
import AvailableFood from "./components/AvailableFood";
import Deatils from "./components/Deatils";
import Error from "./components/Error";
import MyFoods from "./components/MyFoods";
import MyRequest from "./components/MyRequest";
import Private from "./components/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        element: (
          <Private>
            <MyFoods></MyFoods>
          </Private>
        ),
      },
      {
        path: "/myReqFood",
        element: (
          <Private>
            <MyRequest></MyRequest>
          </Private>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <Private>
            <Deatils></Deatils>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/foods/${params.id}`),
      },
      {
        path: "/availale",
        element: <AvailableFood></AvailableFood>,
      },
    ],
  },
]);

export default router;
