import React, { useContext } from "react";
import {
  ConfirmationEmail,
  TitleSuccess,
  ContainerSucces,
} from "../styled-components/Success";
import IconSuccess from "../assets/images/icon-success.svg";
import { MyContext } from "../context/Context";
import { BtnSuscribe } from "../styled-components/Input";

const Success = () => {
  const { email } = useContext(MyContext);
  return (
    <ContainerSucces>
      <img src={IconSuccess} alt="icon-success" className="success" />
      <TitleSuccess>Thanks for suscribing!</TitleSuccess>
      <ConfirmationEmail>
        A confirmation email has been sent to <b>{email}</b> . Please open it
        and click the button inside to confirm your subscription. Dismiss
        message
      </ConfirmationEmail>
      <BtnSuscribe to={"/"} className="btn">
        Dismiss message
      </BtnSuscribe>
    </ContainerSucces>
  );
};

export default Success;
