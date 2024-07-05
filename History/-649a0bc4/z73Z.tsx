import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import CallbackPage from "./Pages/CalbackPage";
import Home from "./Pages/Home/Home";
import UserProfilePage from "./Pages/UserProfilePage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout></Layout>,
//     errorElement: <h3>Error</h3>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//     ],
//   },
// ]);
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/user-profile"
          element={<UserProfilePage></UserProfilePage>}
        ></Route>
      </Route>
      <Route path="calback" element={<CallbackPage></CallbackPage>}></Route>
    </Routes>
  );
};

export default Router;
