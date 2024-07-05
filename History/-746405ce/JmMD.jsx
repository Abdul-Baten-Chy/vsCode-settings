import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from ".ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
export default router;
