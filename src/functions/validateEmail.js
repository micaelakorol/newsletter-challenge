import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/Context";

const validateEmail = () => {
  const { setError } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const emailForm = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email) || email == "") {
      setError("Valid email required");
    } else {
      setError(null);
      setTimeout(() => {
        navigate("/success", { replace: true });
      }, 1000);
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return { handleChange, emailForm, email, setEmail };
};

export default validateEmail;
