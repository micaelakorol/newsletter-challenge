import React, { useContext, useState } from "react";
import {
  BtnSuscribe,
  ContainerSuscribe,
  EmailAdress,
  Errors,
  InputEmail,
} from "../styled-components/Input";
import validateEmail from "../functions/validateEmail";
import { MyContext } from "../context/Context";

const Input = () => {
  const { email, emailForm, handleChange } = validateEmail();
  const {error} = useContext(MyContext)
  return (
    <ContainerSuscribe>
      <EmailAdress htmlFor="email">Email adress</EmailAdress>
      <Errors>{error}</Errors>
      <InputEmail
        type="email"
        placeholder="email@company.com"
        id="email"
        value={email}
        onChange={handleChange}
        onBlur={emailForm}
        className={error && "error"}
      />
      <BtnSuscribe type="submit">Suscribe to monthly newsletter</BtnSuscribe>
    </ContainerSuscribe>
  );
};

export default Input;
