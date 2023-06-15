import React, { useContext } from "react";
import validateEmail from "../functions/validateEmail";
import { Navigate, Outlet } from "react-router-dom";
import { MyContext } from "../context/Context";

const PrivateRoute = () => {
  const { error } = useContext(MyContext);
  // si error == nul se renderizan las rutas hijas de PrivateRoute si no, renderiza a la pag inicial
  // outlet va a renderizar el contenido de las rutas hijas del componente PrivateRoute
  return <> {error == null ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoute;
