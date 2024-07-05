import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

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
      <Route path="/" element={<Layout></Layout>}></Route>
    </Routes>
  );
};

export default Router;
