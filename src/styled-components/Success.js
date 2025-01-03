import styled from "styled-components";
import { Container, Title } from "./Newsletter";
import Color from "./Color";

const ContainerSucces = styled(Container)`
  width: 28%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 1.5rem;
  line-height: 1.4;
  .success {
    width: 11%;
    margin: 0.5rem 0 0 1rem;
  }
  .btn {
    width: 83%;
    margin: auto auto 1rem auto;
  }
  @media (max-width: 1024px) {
    padding: 1rem;
    width: 40%;
  }
  @media (max-width: 768px) {
    margin-top: 5rem;
    width: 74%;
  }
  .success {
    width: 14%;
  }
`;
const ConfirmationEmail = styled.p`
  text-align: start;
  margin: 0 1rem 1.5rem 1rem;
  color: ${Color.DarkSlateGrey};
`;

const TitleSuccess = styled(Title)`
  font-size: 1.88rem;
  padding: 0;
  margin: 1rem;
`;

export { ContainerSucces, ConfirmationEmail, TitleSuccess };
