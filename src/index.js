import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import DataProvider from "./providers/DataProvider";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
  </React.StrictMode>
);

reportWebVitals();
