import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Success from "../pages/success";
import Error from "../pages/Error";
import PrivateRoute from "../pages/PrivateRoute";

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
  