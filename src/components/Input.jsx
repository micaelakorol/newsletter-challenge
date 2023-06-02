import React, { useState } from "react";
import {
  BtnSuscribe,
  ContainerSuscribe,
  EmailAdress,
  InputEmail,
} from "../styled-components/Input";
import validateEmail from "../functions/validateEmail";

const Input = () => {
 const {email,error,emailForm, handleChange, hideMessage} = validateEmail()

  return (
    <ContainerSuscribe>
      <EmailAdress htmlFor="email">Email adress</EmailAdress>
      <InputEmail
        type="email"
        placeholder="email@company.com"
        id="email"
        value={email}
        onChange={handleChange}
        onBlur={emailForm}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <BtnSuscribe type="submit">Suscribe to monthly newsletter</BtnSuscribe>
    </ContainerSuscribe>
  );
};

export default Input;
