import React, { useContext } from "react";
import {
  BtnSuscribe,
  ContainerSuscribe,
  EmailAdress,
  Errors,
  InputEmail,
} from "../../styled-components/Input";
import validateEmail from "../../services/functions/validateEmail";
import { MyContext } from "../../context/Context";

const Input = () => {
  const { emailForm, handleChange, handleSubmit } = validateEmail();
  const { error, email } = useContext(MyContext);
  return (
    <ContainerSuscribe onSubmit={handleSubmit}>
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
      <BtnSuscribe to={error == null && "/success"} onClick={emailForm}>
        Suscribe to monthly newsletter
      </BtnSuscribe>
    </ContainerSuscribe>
  );
};

export default Input;
