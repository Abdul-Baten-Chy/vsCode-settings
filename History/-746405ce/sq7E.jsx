import { createBrowserRouter } from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import CratItems from "./Components/CratItems";
import Home from "./Components/Home";
import ProductByCategory from "./Components/ProductByCategory";
import ProductDeatils from "./Components/ProductDeatils";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import UpdateProduct from "./Components/UpdateProduct";
import ErrorPage from "./ErrorPage";
import Private from "./Hooks/Private";
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
        element: (
          <Private>
            <AddProduct />
          </Private>
        ),
      },
      {
        path: "/shop",
        element: <Shops />,
      },
      {
        path: "/productByCategory/:brandName",
        element: <ProductByCategory />,
        loader: ({ params }) =>
          fetch(
            `https://toy-store-server-psi.vercel.app/products/${params.brandName}`
          ),
      },
      {
        path: "/shop/deatails",
        element: (
          <Private>
            <ProductDeatils />
          </Private>
        ),
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/cartItems",
        element: <CratItems></CratItems>,
      },
      {
        path: "/update/:id",
        element: (
          <Private>
            <UpdateProduct></UpdateProduct>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/productsbyId/${params.id}`),
      },
    ],
  },
]);
export default router;
