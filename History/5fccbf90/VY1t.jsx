import { createBrowserRouter } from "react-router-dom";

import Home from "./Home/Home";
import Registration from "./Registration";
import Root from "./Root";

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
    ],
  },
]);

export default router;
