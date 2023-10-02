import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ShowProducts from "../Pages/ShowProducts/ShowProducts";
import ShowByCategories from "../Pages/ShowByCategories/ShowByCategories";

  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <ShowProducts/>,
        },
        {
          path: "/products/:category",
          element: <ShowByCategories/>,
        },
      ],
    },
  ]);