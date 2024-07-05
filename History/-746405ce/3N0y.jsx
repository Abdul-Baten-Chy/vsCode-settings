import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    // children:[
    //   {
    //     path:"/addProduct",

    //   }
    // ]
  },
]);
export default router;
