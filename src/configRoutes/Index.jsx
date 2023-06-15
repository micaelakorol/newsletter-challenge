import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Success from "../pages/success";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
