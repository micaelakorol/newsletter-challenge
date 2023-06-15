import React, { createContext } from "react";
import { useState } from "react";

export const MyContext = createContext();

const UserProvider = ({children}) => {

const [error, setError] = useState("");

return (
  <MyContext.Provider value={{error, setError}}>
    { children }
  </MyContext.Provider>
);
}


export default UserProvider;
