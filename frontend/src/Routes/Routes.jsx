import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Cart from "../Pages/Dashboard/cart";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Secret from "../Pages/Shared/Secret/Secret";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: <PrivateRoutes> <Secret /> </PrivateRoutes>

      },
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children:[
      {
        path:'cart',
        element: <Cart />
        

      }
    ]
  }
]);

export default router;
