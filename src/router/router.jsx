import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import ProjectDetails from "../component/ProjectDetails/ProjectDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails></ProjectDetails>
      }
    ]
  },
]);