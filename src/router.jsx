import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyTime from "./MyTime/MyTime";
import Playtime from "./playtime";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Playtime />,
  },
  {
    path: "/MyTime",
    element: <MyTime />,
  },
]);

function AppRouter({ children }) {
  return <RouterProvider router={router}>{children}</RouterProvider>;
}

export default AppRouter;
