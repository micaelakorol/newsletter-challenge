import {
  Container,
  Title,
  NewsletterInfo,
} from "../styled-components/Newsletter";
import Image from "./Elements/Image";
import BodyNewsletter from "./Elements/BodyNewsletter";
import Input from "./Elements/Input";

const Newsletter = () => {

  return (
    <Container>
      <NewsletterInfo>
        <Title>Stay updated!</Title>
        <BodyNewsletter />
        <Input />
      </NewsletterInfo>
      <Image />
    </Container>
  );
};

export default Newsletter;
