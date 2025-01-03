import React, { createContext } from "react";
import { useState } from "react";

export const MyContext = createContext();

const UserProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const cleanField = (e) => {
    setEmail('')
  }

  return (
    <MyContext.Provider value={{ error, setError, email, setEmail, cleanField }}>
      {children}
    </MyContext.Provider>
  );
};

export default UserProvider;
