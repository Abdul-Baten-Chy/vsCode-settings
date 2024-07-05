import { createBrowserRouter } from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import Home from "./Components/Home";
import ErrorPage from "./ErrorPage";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);
export default router;
