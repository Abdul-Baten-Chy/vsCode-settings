import { createBrowserRouter } from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import Home from "./Components/Home";
import Shops from "./Components/Shops";
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
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/shop",
        element: <Shops />,
      },
      {
        path: "/productByCategory",
        element: <ProductByCategory />,
      },
    ],
  },
]);
export default router;
