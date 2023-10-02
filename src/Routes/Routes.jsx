import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ShowProducts from "../Pages/ShowProducts/ShowProducts";

  
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
      ],
    },
  ]);