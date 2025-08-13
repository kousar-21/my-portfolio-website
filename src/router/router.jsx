import {createBrowserRouter} from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout> ,
    children: [
        {
            index:true,
            element:<Home></Home>
        }
    ]
  },
]);