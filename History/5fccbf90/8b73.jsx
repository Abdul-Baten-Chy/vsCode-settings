import { createBrowserRouter } from "react-router-dom";

import Home from "./Home/Home";
import Registration from "./Registration";
import Root from "./Root";
import AddFoods from "./components/AddFoods";
import MyFoods from "./components/MyFoods";

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
        path: "/addFoods",
        element: <AddFoods></AddFoods>,
      },
      {
        path: "/myFoods",
        element: <MyFoods></MyFoods>,
      },
    ],
  },
]);

export default router;
