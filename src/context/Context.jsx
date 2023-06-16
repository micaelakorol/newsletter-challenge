import React, { createContext } from "react";
import { useState } from "react";

export const MyContext = createContext();

const UserProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  return (
    <MyContext.Provider value={{ error, setError, email, setEmail }}>
      {children}
    </MyContext.Provider>
  );
};

export default UserProvider;
