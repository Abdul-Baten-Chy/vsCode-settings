import { createBrowserRouter } from "react-router-dom";
import Registration from "./Registration";
const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
]);

export default router;
