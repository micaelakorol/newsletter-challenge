import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Success from "../pages/success";
import Error from "../pages/Error";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<Error />} />
    </>
  )
);
