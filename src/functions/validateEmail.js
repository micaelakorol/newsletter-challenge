import React, { useContext } from "react";
import { useState } from "react";
import { MyContext } from "../context/Context";

const validateEmail = () => {
  const { setError, email, setEmail } = useContext(MyContext);

  // const navigate = useNavigate();

  const emailForm = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email) || email === "") {
      setError("Valid email required");
    } else {
      setError(null);
      //   navigate("/success");
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return { handleChange, emailForm, handleSubmit };
};

export default validateEmail;
