import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Error from "../Error/Error";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Success from "../MessageSuccess/success";

export const router = createBrowserRouter([
  {
    errorElement: <Error />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/success",
            element: <Success />,
          },
        ],
      },
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
]);
