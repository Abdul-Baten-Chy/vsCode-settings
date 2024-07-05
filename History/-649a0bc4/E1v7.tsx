import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <h3>Error</h3>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <h3>Heloo</h3>,
      },
    ],
  },
]);

export default router;
