import styled from "styled-components";
import Color from "./Color";

const ContainerSuscribe = styled.section`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding-left: 1.6rem;
  .error {
    border: 1.3px solid ${Color.Tomato};
    background-color: ${Color.BgInputError};
    ::placeholder {
      color: ${Color.InputError};
    }
  }
`;

const Errors = styled.h4`
  font-size: 0.6rem;
  color: ${Color.Tomato};
  text-align: end;
`;

const InputEmail = styled.input`
  margin: 0.5rem 0;
  border: 1px solid ${Color.Grey};
  border-radius: 0.3rem;
  padding: 0.7rem;
  outline: none;
`;
const EmailAdress = styled.label`
  color: ${Color.DarkSlateGrey};
  font-weight: 700;
  font-size: 0.7rem;
  margin-top: 1.5rem;
`;

const BtnSuscribe = styled.button`
  background-color: ${Color.DarkSlateGrey};
  color: ${Color.White};
  font-weight: 700;
  padding: 0.7rem;
  border: none;
  margin-top: 0.6rem;
  cursor: pointer;
  border-radius: 0.5rem;
  &:hover {
    background-image: linear-gradient(${Color.Orange}, ${Color.Pink});
  }
`;

export { EmailAdress, InputEmail, BtnSuscribe, ContainerSuscribe, Errors };
