import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AllEmplyeeList from "../Pages/dashboard/Admin/AllEmplyeeList";
import Dashboard from "../Pages/dashboard/Dashboard";
import Employee from "../Pages/dashboard/Employee/Employee";
import PaymentHistory from "../Pages/dashboard/Employee/PaymentHistory";
import WorkSheet from "../Pages/dashboard/Employee/WorkSheet";
import Details from "../Pages/dashboard/Hr/Details";
import EmployeeList from "../Pages/dashboard/Hr/EmployeeList";
import Progress from "../Pages/dashboard/Hr/Progress";
import Error from "../error/Error";
import AdminRoute from "./AdminRoute";
import EmployeeRoute from "./EmployeeRoute";
import HrRoute from "./HrRoute";
import Private from "./Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <Private>
        <Dashboard></Dashboard>
      </Private>
    ),
    children: [
      {
        path: "employee-list",
        element: (
          <HrRoute>
            <EmployeeList></EmployeeList>
          </HrRoute>
        ),
      },
      {
        path: "progress",
        element: <Progress></Progress>,
      },
      {
        path: "allemployee",
        element: (
          <AdminRoute>
            <AllEmplyeeList></AllEmplyeeList>
          </AdminRoute>
        ),
      },
      {
        path: "employee",
        element: (
          <EmployeeRoute>
            <Employee></Employee>
          </EmployeeRoute>
        ),
      },
      {
        path: "history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "workSheet",
        element: <WorkSheet></WorkSheet>,
      },
      {
        path: "dashboard/employee-list/details",
        element: <Details></Details>,
      },
    ],
  },
]);

export default router;
