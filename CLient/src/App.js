import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import PageNotFound from "./Components/PageNotFound";
import Password from "./Components/Password";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import Reset from "./Components/Reset";
import Username from "./Components/Username";

/** Creating Routes
 *
 */
const routes = createBrowserRouter([
  {
    path: "/",
    element: <div>Bye From Bd</div>,
  },
  {
    path: "/home",
    element: <div>This is home routes</div>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/username",
    element: <Username></Username>,
  },
  {
    path: "/password",
    element: <Password></Password>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
