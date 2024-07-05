import { createBrowserRouter } from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import Home from "./Components/Home";
import ProductByCategory from "./Components/ProductByCategory";
import ProductDeatils from "./Components/ProductDeatils";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import Shops from "./Shops/Shops";

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
        path: "/productByCategory/:brandName",
        element: <ProductByCategory />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/products/${params.brandName}`),
      },
      {
        path: "/shop/deatails",
        element: <ProductDeatils />,
      },
    ],
  },
]);
export default router;
