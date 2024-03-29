import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MyContext } from "../../context/Context";

const PrivateRoute = () => {
  const { error } = useContext(MyContext);
  return <> {error == null ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoute;
